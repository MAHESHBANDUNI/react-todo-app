import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * Creates and configures the Redux store
 * Enables Redux DevTools if available in the browser
 */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
