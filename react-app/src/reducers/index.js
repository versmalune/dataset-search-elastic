import produce from 'immer';

const initialState = {
  datas : [],
  term : null,
  searched : null,
  error : null
};

const reducer = produce((state, action) => {
  console.log(action);
  switch(action.type) {
    case 'GET_DATAS':
      state.datas = action.payload;
      break;
    case 'SET_TERM':
      state.term = action.payload;
      break;
    case 'SEARCHED':
      state.searched = action.payload;
      break;
    case 'CLEAR_ERRORS':
      state.error = null;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;