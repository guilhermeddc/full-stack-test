import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { Container, ImageWrapper, Li } from './styles';

function Beer() {
  const { id } = useParams();

  const [beer, setBeer] = useState({});

  useEffect(() => {
    async function handleGetBeers(id) {
      const { data: response } = await api.get(`/beers/${id}`);

      setBeer(response);
    }

    handleGetBeers(id);
  }, [id]);

  return (
    <>
      <NavBar />
      <Container>
        <ImageWrapper
          style={{
            backgroundImage: `url(${
              beer.image_url
                ? beer.image_url
                : 'https://image.flaticon.com/icons/svg/1857/1857746.svg'
            })`,
          }}
        />
        <div>
          <h1>
            {beer.name} - {beer.first_brewed}
          </h1>
          <br />
          <p>{beer.tagline}</p>
          <br />
          <p>{beer.description}</p>
          <br />
          <h2>Informações</h2>
          <br />
          <ul>
            <Li>
              <span>abv:</span>
              <span>{beer.abv}</span>
            </Li>
            <Li>
              <span>ibu:</span>
              <span>{beer.ibu}</span>
            </Li>
            <Li>
              <span>target fg:</span> <span>{beer.target_fg}</span>
            </Li>
            <Li>
              <span>target og:</span> <span>{beer.target_og}</span>
            </Li>
            <Li>
              <span>ebc:</span> <span>{beer.ebc}</span>
            </Li>
            <Li>
              <span>srm:</span> <span>{beer.srm}</span>
            </Li>
            <Li>
              <span>ph:</span> <span>{beer.ph}</span>
            </Li>
            <Li>
              <span>attenuation level:</span>{' '}
              <span>{beer.attenuation_level}</span>
            </Li>
          </ul>
          <h3>{beer.contributed_by}</h3>
          <br />
          <p>{beer.brewers_tips}</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Beer;
