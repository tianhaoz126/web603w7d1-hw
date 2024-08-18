import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './GlobalStyle';
import { themeStyles } from './theme';
import DarkThemeToggle from './DarkThemeToggle';

const App = () => {
  const themeMode = useSelector((state) => state.preferences.themeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={{ mode: themeMode }}>
        <GlobalStyle />
        <div>
          <DarkThemeToggle />
          <h1>Welcome!</h1>
          <h3>Full Stack Web Development</h3>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

