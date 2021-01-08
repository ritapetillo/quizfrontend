export const persistState = (key, state) =>
  window.localStorage.setItem(key, JSON.stringify(state));

export const getInitialState = async (key) => {
  const savedState = window.localStorage.getItem(key);
  try {
    if (!savedState) return undefined;
    return JSON.parse(savedState);
  } catch (err) {
    console.log("Error loading the state " + key);
    return undefined;
  }
};
