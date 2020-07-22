import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import Logo from '../../assets/beer.gif';

function NavBar() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <div>
        <Link to="/">
          <img src={Logo} alt="Beer Fest" />
          <h1>Beer Fest</h1>
        </Link>

        <div>
          <p>{user.name}</p>
          <button onClick={signOut}>
            <p>Sair</p>
            <FiLogOut />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;
