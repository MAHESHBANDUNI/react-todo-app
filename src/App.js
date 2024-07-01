import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/App.css';

/**
 * App Component
 * 
 * This is the root component of the application.
 * It wraps the entire app with the Redux Provider and renders the main structure.
 */
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className="app__title">React Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
