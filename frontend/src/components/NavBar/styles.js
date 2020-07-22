import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  background: ${theme.colors.Cyan};
  box-shadow: 2px 2px 8px ${theme.colors.Background};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  > div {
    width: 100%;
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;

      img {
        width: 70px;
        margin: 10px 0;
        border-radius: 100%;
      }

      h1 {
        color: ${theme.colors.Foreground};
        margin-left: 15px;

        @media screen and (max-width: 450px) {
          font-size: 22px;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;

      > p {
        padding-right: 15px;
        border-right: 1px solid ${theme.colors.Foreground};
      }

      button {
        padding: 0 15px;
        margin: 0;

        p {
          font-weight: 300;
          margin-right: 10px;
        }
      }
    }
  }
`;
