import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  background: ${theme.colors.Foreground};
  border-radius: 4px;
  width: 100%;
  max-width: 360px;
  margin-top: 75px;

  a {
    color: ${theme.colors.Selection};
    display: flex;
    padding: 5px;

    div {
      width: 200px;
      height: 100px;
      padding: 10px 10px 10px 0px;

      p {
        font-size: 14px;
        margin: 5px 0;
      }

      :first-child {
        margin-top: -50px;
        background: center center no-repeat;
        background-size: contain;
        width: 150px !important;
        height: 200px;
        display: block;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
