import React from "react";
import PropTypes from "prop-types";

import { Container, NextButton, PreviusButton } from "./styles";

const Pagination = ({ next, previus, total, page, children }) => {
  return (
    <>
      {total > 1 ? (
        <>
          <Container>
            <PreviusButton onClick={previus} disabled={page === 1}>
              -
            </PreviusButton>
            {children}

            <NextButton onClick={next} disabled={page === total}>
              +
            </NextButton>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  next: () => {},
  previus: () => {},
};

export default Pagination;
