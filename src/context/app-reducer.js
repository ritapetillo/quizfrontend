import { SET_CURRENT_EXAM, AUTH,LOGOUT } from "./app-actions";

const appReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_CURRENT_EXAM:
      return {
        ...state,
        currentExam: action.payload,
      };
    case AUTH:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: "",
        isAuth: false,
      };

    default:
      return state;
  }
};

export default appReducer;
