import React from 'react';
import { Group, Anchor } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

const Links = ({ user, setToken, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken('');
    setUser('');
    navigate('/');
    console.log('111');
  };
  return (
    <Group position='center' mb='xl' mt='md'>
      <Anchor component={Link} to='/'>
        Free Api
      </Anchor>
      <Anchor component={Link} to='/secured'>
        Secured Api
      </Anchor>
      {!user ? (
        <Anchor component={Link} to='/login'>
          Login
        </Anchor>
      ) : (
        <Anchor component='button' onClick={() => handleLogout()}>
          Logout
        </Anchor>
      )}
    </Group>
  );
};

export default Links;
