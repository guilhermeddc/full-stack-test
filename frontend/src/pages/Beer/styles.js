import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 0 15px;
  margin: 150px auto 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }

  div {
    margin-left: 15px;
    flex-wrap: wrap;
    width: 100%;

    h1,
    h2 {
      padding: 0 0 15px;
      border-bottom: 1px solid ${theme.colors.Foreground};
    }

    h3 {
      padding: 15px 0 15px;
      border-bottom: 1px solid ${theme.colors.Foreground};
      border-top: 1px solid ${theme.colors.Foreground};
    }

    @media screen and (max-width: 450px) {
      margin-top: 50px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  height: 715px;
  background: center center no-repeat;
  background-size: contain;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 15px 15px 0;
  background: ${theme.colors.Cyan};
  border-radius: 16px;
  padding: 5px 10px;
`;
