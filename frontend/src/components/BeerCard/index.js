import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function BeerCard({ id, name, image, tagline, firstBrewed }) {
  return (
    <Container>
      <Link to={`/beer/${id}`}>
        <div
          style={{
            backgroundImage: `url(${
              image
                ? image
                : 'https://image.flaticon.com/icons/svg/1857/1857746.svg'
            })`,
          }}
        />

        <div>
          <h3>{name}</h3>
          <p>
            <strong>Slogan: </strong>
            {tagline}
          </p>
          <p>
            <strong>Primeira fabricada: </strong>
            {firstBrewed}
          </p>
        </div>
      </Link>
    </Container>
  );
}

export default BeerCard;
