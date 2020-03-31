import AsyncStorage from '@react-native-community/async-storage';
import { constants } from '../actions/markers';

export default (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === constants.get('GET_MARKERS')) {
    AsyncStorage.getItem('@markers').then((markersJson) => {
      let markers = [];
      if (markersJson) {
        markers = JSON.parse(markersJson);
      }
      console.log(markers)
      store.dispatch({
        type: constants.get('GET_MARKERS_DONE'),
        payload: markers,
      });
    }).catch(console.log);
  }
  else if (action.type !== constants.get('GET_MARKERS_DONE')) {
    AsyncStorage.setItem('@markers', JSON.stringify(store.getState().markers)).catch(console.log)
  }
  return result;
}
