import styled from 'styled-components';

import theme from '../../styles/theme';

export const InputStyled = styled.input`
  background: ${theme.colors.Foreground};
  border: 2px solid
    ${(props) => (props.isErrored ? theme.colors.Red : theme.colors.Foreground)};
  border-radius: 4px;
  height: 44px;
  padding: 0 12px;
  color: ${theme.colors.Background};
  margin: 0 0 10px;

  &:focus {
    border: 2px solid ${theme.colors.Cyan};
  }

  &::placeholder {
    color: ${theme.colors.Background};
    background: ${theme.colors.Foreground};
  }
`;

export const Span = styled.span``;
