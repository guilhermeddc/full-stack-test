import styled, { keyframes } from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-90deg, #20232a, #282c34);
`;

const animationContent = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  animation: ${animationContent} 1s;
  img {
    width: 100%;
    max-width: 315px;
    border-radius: 100%;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    a {
      color: ${theme.colors.Foreground};
      font-size: 14px;
      margin-top: 15px;
      opacity: 0.8;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: ${theme.colors.Red};
      font-size: 12px;
      align-self: flex-end;
      margin: 0 0 10px;
    }
  }
`;
