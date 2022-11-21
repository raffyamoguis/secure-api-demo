import React from 'react';
import { TextInput, Button, Group, Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, setToken }) => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) => (value === '' ? 'Username is required' : null),
      password: (value) => (value === '' ? 'Password is required' : null),
    },
  });

  const handleLogin = (values) => {
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        axios
          .post('https://salmon-cowboy-boots.cyclic.app/api/token', {
            email: 'user@dev.co',
            password: 'user123',
          })
          .then(function (response) {
            setToken(response.data.token);
            navigate('/');
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
        <TextInput
          withAsterisk
          label='Username'
          placeholder='Username or email'
          {...form.getInputProps('username')}
        />

        <PasswordInput
          label='Password'
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Group position='right' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Login;
