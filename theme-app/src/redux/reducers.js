import { combineReducers } from 'redux';
import { TOGGLE_THEME } from './actions';

const initialPreferencesState = {
  themeMode: 'light',
};

const preferences = (state = initialPreferencesState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        themeMode: state.themeMode === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  preferences,
});

export default rootReducer;
