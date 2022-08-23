export const usersState = {
  users: [],
  addUsersModal: false,
  editUsersModal: {
    modal: false,
    uId: null,
    name: "",
    phone: "",
  },
  loading: false,
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    /* Get all Users */
    case "fetchUsersAndChangeState":
      return {
        ...state,
        users: action.payload,
      };
    /* Edit a Users */
    case "editUsersModalOpen":
      return {
        ...state,
        editUsersModal: {
          modal: true,
          uId: action.uId,
          name: action.name,
          phone: action.phone,
        },
      };
    case "editUsersModalClose":
      return {
        ...state,
        editUsersModal: {
          modal: false,
          uId: null,
          name: "",
          phone: "",
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
