import React, {  useReducer, useEffect } from "react";
import {  } from "./app-actions";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

function AppState(props) {
  const initialState = {
      user: "",
      isAuth:false
  };
    
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {}, []);


  return (
    <AppContext.Provider value={{ ...state }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
