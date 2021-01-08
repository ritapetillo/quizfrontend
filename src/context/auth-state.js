
import {getInitialState} from '../lib/persist-state'
const STORAGE_KEY = "authState";
const defaultState = {
  session: "",
};

const initialState = getIntialState(STORAGE_KEY) ?? defaultState;
