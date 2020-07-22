import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${theme.colors.Background};
    color: ${theme.colors.Foreground};
    -webkit-font-smoothing: antialiased ;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    background: ${theme.colors.Cyan};
    margin: 5px 0 0;
    border: none;
    border-radius: 4px;
    height: 44px;
    color: ${theme.colors.Foreground};
    font-weight: bold;
    transition: background 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer !important;

    &:hover {
      background: ${theme.colors.Cyan}88;
    }
  }
`;
