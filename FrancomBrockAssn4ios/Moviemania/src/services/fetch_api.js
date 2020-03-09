const API_KEY = `9b5dc2dda3f6349ac5ed0db1bf3e04cf`;
const ROOT_URL = 'https://api.themoviedb.org/3';

export default class MovieService {
  static async search(type, searchTerm, pageNumber=1){
    rest = '';
    switch(type) {
     case 'searchMovies':
       rest = `/search/movie?query=${searchTerm}&page=${pageNumber}&`;
       break;
     case 'searchPeople':
       rest = `/search/person?query=${searchTerm}&page=${pageNumber}&`;
       break;
     case 'genres':
       rest = `/genre/movie/list?language=en-US&`;
       break;
     case 'movieDetails':
       rest = `/movie/${searchTerm}?`;
       break;
     case 'personDetails':
       rest = `/person/${searchTerm}?`;
       break;
     case 'searchGenres':
       rest = `/discover/movie?with_genres=${searchTerm}&page=${pageNumber}&`;
       break;
     case 'cast':
         rest = `/movie/${searchTerm}/credits?`;
         break;
     case 'movies':
         rest = `/discover/movie?with_cast=${searchTerm}&append_to_response=credits&`;
         break;
     default:
       rest = '';
     }
    const result = await fetch(`${ROOT_URL}${rest}api_key=${API_KEY}`);
    if ((result.status === 404 )){ //Change this to be something else?
      throw new Error("Page not found");
    }
    const resultJson = await result.json();
    return resultJson;
  }
}
