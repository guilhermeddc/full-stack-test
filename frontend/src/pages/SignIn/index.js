import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content } from './styles';

import Logo from '../../assets/beer.gif';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValitadionErrors';

function SignIn() {
  const formRef = useRef(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insira um e-mail válido.')
            .required('E-mail obrigatório.'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, history, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Acessar</button>
          <Link to="/register">Criar conta gratuita</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignIn;
