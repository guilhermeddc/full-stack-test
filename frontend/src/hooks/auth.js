import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@BeerFest:token');
    const user = localStorage.getItem('@BeerFest:user');

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const { data: response } = await api.post('/sessions', { email, password });

    const { token, user } = response;

    localStorage.setItem('@BeerFest:token', token);
    localStorage.setItem('@BeerFest:user', JSON.stringify(user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    await api.post('/users', {
      name,
      email,
      password,
    });
  }, []);

  const signOut = () => {
    localStorage.removeItem('@BeerFest:token');
    localStorage.removeItem('@BeerFest:user');

    api.defaults.headers.Authorization = null;

    setData({});
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const constext = useContext(AuthContext);

  if (!constext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return constext;
}

export { AuthProvider, useAuth };
