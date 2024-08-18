import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/actions';

const DarkThemeToggle = () => {
  const themeMode = useSelector((state) => state.preferences.themeMode);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={themeMode === 'dark'}
        onChange={() => dispatch(toggleTheme())}
      />
      <span>Use Dark Theme</span>
    </div>
  );
};

export default DarkThemeToggle;
