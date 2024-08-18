import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.mode === 'dark' ? '#2d2d2d' : '#fff'};
    color: ${({ theme }) => theme.mode === 'dark' ? '#fff' : '#000'};
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;
