import { SET_CURRENT_EXAM } from "./app-actions";

const appReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_CURRENT_EXAM:
      return {
        ...state,
        currentExam: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
