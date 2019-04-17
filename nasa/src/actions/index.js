import axios from 'axios';

export const FETCH_PHOTO_START = 'FETCH_PHOTO_START';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';
// https://api.nasa.gov/planetary/apod?api_key=l8kI5K7R7gDv4VhLVOcxnbnVObY8ADerVaDlYJ39
export const getPhoto = () => dispatch => {
  
  dispatch({ type: FETCH_PHOTO_START });

  axios.get('https://api.nasa.gov/planetary/apod?api_key=l8kI5K7R7gDv4VhLVOcxnbnVObY8ADerVaDlYJ39')
    .then(res => dispatch({
      type: FETCH_PHOTO_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_PHOTO_FAILURE,
      payload: 'Error! The data could not be fetched from the API'
    }))

}

export const getInfo = () => dispatch => {
  
  dispatch({ type: FETCH_PHOTO_START });

  axios.get('https://api.nasa.gov/planetary/apod?api_key=l8kI5K7R7gDv4VhLVOcxnbnVObY8ADerVaDlYJ39')
    .then(res => dispatch({
      type: FETCH_PHOTO_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_PHOTO_FAILURE,
      payload: 'Error! The data could not be fetched from the API'
    }))

}