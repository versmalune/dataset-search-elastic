import axios from 'axios';

const SERVER_URL = 'http://localhost:3001';

export function getDatas(term){
  const url = `${SERVER_URL}/api/search/${term}`;
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(url
    ).then(({data}) => {
      dispatch({
        type: 'GET_DATAS',
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    });
  };
}

export function setTerm(item) {
  return (dispatch) => {
    dispatch({
      type: 'SET_TERM',
      payload: item
    });
  };
}

export function search() {
  return (dispatch) => {
    dispatch({
      type: 'SEARCHED',
      payload: 'Y'
    });
  };
}

export function searchReset() {
  return (dispatch) => {
    dispatch({
      type: 'SEARCHED',
      payload: null
    });
  };
}