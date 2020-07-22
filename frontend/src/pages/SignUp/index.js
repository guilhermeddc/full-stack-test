import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, Content } from './styles';

import Logo from '../../assets/beer.gif';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValitadionErrors';

function SignUp() {
  const formRef = useRef(null);

  const { signUp } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório.'),
          email: Yup.string()
            .email('Insira um e-mail válido.')
            .required('E-mail obrigatório.'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signUp(data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso',
          description: 'Voce já pode fazer seu login no Beer Fest',
        });

        history.push('/login');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar',
          description: 'Ocorreu um erro ao fazer cadastro, tente mais tarde',
        });
      }
    },
    [addToast, history, signUp],
  );

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Criar conta</button>
          <Link to="/login">Já tenho conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUp;
