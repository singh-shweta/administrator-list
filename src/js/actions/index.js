import { fetchAdmins } from "../../utils/adminCalls";

export function addTheAdmin(payload) {
  return { type: "ADD_ADMIN", payload };
}

export function addAdmin(dispatch, payload) {
  dispatch(addTheAdmin(payload));
  dispatch(hideAdminModal());
}

export function addNewAdmin(payload) {
  return dispatch => addAdmin(dispatch, payload);
}

export function showAdminModal() {
  return {
    type: "SHOW_ADMIN_MODAL",
    payload: {
      showModal: true
    }
  };
}

export function hideAdminModal() {
  return {
    type: "HIDE_ADMIN_MODAL",
    payload: {
      showModal: false
    }
  };
}

export function getAdmins(dispatch) {
  dispatch(dataLoadInitiated());
  return fetchAdmins().then(res => {
    dispatch(setAdmins(res.response));
  });
}

export function setAdmins({ admins }) {
  return {
    type: "SET_ADMINS",
    payload: {
      isLoading: false,
      admins
    }
  };
}

export function populateAdmins() {
  return dispatch => {
    return getAdmins(dispatch);
  };
}

export function dataLoadInitiated() {
  return {
    type: "LOAD_INITIATED",
    payload: {
      isLoading: true
    }
  };
}

export function dataLoadDone() {
  return {
    type: "LOAD_DONE",
    payload: {
      isLoading: false
    }
  };
}
