import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 0 15px;
  margin: 150px auto 50px;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 450px) {
      margin: 50px auto 15px;
    }
  }
`;

export const Button = styled(Link)`
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 400;
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

  @media screen and (max-width: 450px) {
    margin: 30px auto 15px;
  }
`;

export const Header = styled.div`
  h1 {
    @media screen and (max-width: 450px) {
      margin: 0 auto;
    }
  }
`;

export const PaginationDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => (props.disabled ? theme.colors.Cyan : 'none')};
  color: ${(props) =>
    props.disabled ? theme.colors.Cyan : theme.colors.Foreground};
  background: ${(props) =>
    props.disabled ? theme.colors.Foreground : theme.colors.Selection};
  margin-left: 1px;

  @media screen and (max-width: 450px) {
    width: 28px;
    height: 28px;
  }
`;
