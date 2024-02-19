import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from './redux/themeslice';
import './sass/themes.scss'; 
function App() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  };

  return (
    <div>
      <h1>My App</h1>
      <button onClick={handleToggleDarkMode}>
        {darkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
}

export default App;
