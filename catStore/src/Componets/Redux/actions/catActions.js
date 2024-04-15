// actions/catActions.js
export const setCats = (cats) => ({
    type: 'SET_CATS',
    payload: cats,
  });
  
  export const setSelectedCat = (cat) => ({
    type: 'SET_SELECTED_CAT',
    payload: cat,
  });
  