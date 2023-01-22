import React, { useContext } from 'react';
import axios from 'axios';

import { GlobalContext } from '@/pages/_app';

import { Button } from '@chakra-ui/react';

export const NewRoomBtn = () => {
  const { userValue } = useContext( GlobalContext );

//this functions call the API page room/create to create new room
  const handleClick = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: '/api/room/create',
        data: {
          name: 'new room',
          creator: userValue.name
        },
      });

      return response.data;
    }
    catch( error ) {
      console.log({ error });
    }
  }

  return (
    <Button
      onClick={ () => handleClick() }
    >
      + New Room
    </Button>
  );
}