import React, { useReducer, useEffect } from "react";
import { SET_CURRENT_EXAM,AUTH } from "./app-actions";
import AppContext from "./app-context";
import appReducer from "./app-reducer";
import { postNewExam, getExamById, login,getUser } from "../lib/fetches";

function AppState(props) {
  const initialState = {
    user: "",
    isAuth: false,
    currentExam: "",
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => { }, []);

  const doLogin = async (cred) => {
    try {
      console.log(cred);
      const token = await login(cred);
      if (token) {
        await localStorage.setItem("TOKEN", JSON.stringify(token));
        const user = await getUser(token);
        dispatch({
          type: AUTH,
          payload: user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startExam = async (body) => {
    try {
      const data = await postNewExam(body);
      const exam = await getExamById(data._id);

      dispatch({
        type: SET_CURRENT_EXAM,
        payload: exam,
      });
      console.log(state.currentExam);
    } catch (err) {
      console.log("It was not possible to start a new exam");
    }
  };

  return (
    <AppContext.Provider value={{ ...state, startExam }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
