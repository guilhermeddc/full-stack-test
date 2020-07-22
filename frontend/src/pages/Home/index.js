import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import BeerCard from '../../components/BeerCard';
import Pagination from '../../components/Pagination';

import {
  Container,
  Header,
  Button,
  ButtonStyled,
  PaginationDiv,
} from './styles';

function Home() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function handleGetBeers() {
      const response = await api.get(`/beers?page=${page}&per_page=30`);

      setBeers(response.data);
    }

    handleGetBeers();
  }, [page]);

  const Pages = () => {
    let list = [];
    for (let pg = 1; pg <= 11; pg++) {
      list.push(
        <ButtonStyled
          key={pg}
          disabled={pg === page}
          onClick={() => setPage(pg)}>
          {pg}
        </ButtonStyled>,
      );
    }
    return list;
  };

  return (
    <>
      <NavBar />
      <Container>
        <Header>
          <h1>Escolha sua Cerveja!</h1>
          <Button to="/beer/random">Ou deixa que eu escolho para você</Button>
        </Header>

        <div>
          {beers &&
            beers.map((beer) => (
              <BeerCard
                key={beer.id}
                id={beer.id}
                name={beer.name}
                image={beer.image_url}
                tagline={beer.tagline}
                firstBrewed={beer.first_brewed}
              />
            ))}
        </div>

        <PaginationDiv>
          <Pagination
            page={page}
            total={11}
            next={() => setPage(page + 1)}
            previus={() => setPage(page - 1)}>
            <Pages />
          </Pagination>
        </PaginationDiv>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
