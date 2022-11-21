import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mantine/core';

const SecuredApi = ({ token }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const run = async () => {
      axios
        .get('https://salmon-cowboy-boots.cyclic.app/api/messages', {
          headers: {
            'x-auth-token': token,
            'content-type': 'application/json',
          },
        })
        .then((result) => {
          setMessage(result.data.result);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setMessage('This api is required authentication.');
        });
    };
    run();
  });
  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      {message}
    </Box>
  );
};

export default SecuredApi;
