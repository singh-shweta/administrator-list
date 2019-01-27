const initialState = {
  admins: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ADMINS":
    case "LOAD_INITIATED":
    case "HIDE_ADMIN_MODAL":
    case "SHOW_ADMIN_MODAL":
    case "SET_ACTIVE_ADMIN":
      return { ...state, ...action.payload };
    case "ADD_ADMIN":
      return Object.assign({}, state, {
        admins: state.admins.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;
