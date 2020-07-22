import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div``;

export const PreviusButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: ${theme.colors.Foreground};
  background: ${(props) =>
    props.disabled ? theme.colors.Selection : theme.colors.Cyan};
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;

  @media screen and (max-width: 450px) {
    width: 28px;
    height: 28px;
  }
`;

export const NextButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  margin-left: 1px;
  color: ${theme.colors.Foreground};
  background: ${(props) =>
    props.disabled ? theme.colors.Selection : theme.colors.Cyan};
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  @media screen and (max-width: 450px) {
    width: 28px;
    height: 28px;
  }
`;
