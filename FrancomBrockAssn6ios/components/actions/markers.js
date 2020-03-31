import Constants from './constants'

export const constants = new Constants({
  ADD_MARKER: 'ADD_MARKER',
  GET_MARKERS: 'GET_MARKERS',
  GET_MARKERS_DONE: 'GET_MARKERS_DONE'
})

export const createMarker = (marker) => ({
  type: 'ADD_MARKER',
  payload: {
    marker,
  }
});

export const getMarkers = () => ({
  type: constants.get('GET_MARKERS'),
})
