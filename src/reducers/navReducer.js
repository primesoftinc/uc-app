import AppNavigator from '../containers/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("InitialScreen")
);
const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;