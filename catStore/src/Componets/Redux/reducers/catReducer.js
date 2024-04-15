// reducers/catReducer.js
const initialState = {
    cats: [],
    selectedCat: null,
  };
  
  const catReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATS':
        return { ...state, cats: action.payload };
      case 'SET_SELECTED_CAT':
        return { ...state, selectedCat: action.payload };
      default:
        return state;
    }
  };
  
  export default catReducer;
  