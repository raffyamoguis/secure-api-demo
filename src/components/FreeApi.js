import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mantine/core';

const FreeApi = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const run = async () => {
      axios
        .get('https://salmon-cowboy-boots.cyclic.app/api/free')
        .then((result) => {
          setMessage(result.data.result);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
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

export default FreeApi;
