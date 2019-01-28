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
      if (
        state.admins.find(admin => {
          return admin.email === action.payload.email;
        })
      ) {
        return Object.assign({}, state, {
          admins: state.admins.map(admin => {
            if (admin.email === action.payload.email) {
              return action.payload;
            }
            return admin;
          })
        });
      }
      return Object.assign({}, state, {
        admins: state.admins.concat(action.payload)
      });
    case "DELETE_ACTIVE_ADMIN":
      return Object.assign({}, state, {
        admins: state.admins.filter(
          admin => admin.email !== state.activeAdmin.email
        )
      });

    default:
      return state;
  }
}

export default rootReducer;
