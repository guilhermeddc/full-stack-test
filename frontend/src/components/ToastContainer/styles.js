import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import theme from '../../styles/theme';

const toastTypeVariations = {
  info: css`
    background: ${theme.colors.Cyan};
  `,
  success: css`
    background: ${theme.colors.Green};
  `,
  error: css`
    background: ${theme.colors.Red};
  `,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;

  button {
    position: absolute;
    right: 16px;
    top: 4px;
    padding: 0;
    margin: 0;
    border-radius: 100px;
    background: transparent;

    :hover {
      background: transparent;
    }
  }
`;

export const Toast = styled(animated.div)`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px ${theme.colors.Background}88;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  color: ${theme.colors.Foreground};

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
`;
