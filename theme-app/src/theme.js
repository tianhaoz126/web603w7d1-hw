import { theme } from 'styled-theming';

export const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

export const darkTheme = {
  background: '#2d2d2d',
  color: '#ffffff',
};

export const themeStyles = theme('mode', {
  light: lightTheme,
  dark: darkTheme,
});
