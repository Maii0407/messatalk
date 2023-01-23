import React, { useState } from 'react';

import { NewRoomForm } from 'components/forms/NewRoom';

import {
  Button,
  Flex,
} from '@chakra-ui/react';

export const NewRoomBtn = () => {
  const [ showForm, setShowForm ] = useState( false );

  return (
    <Flex
      width='100%'
      position='fixed'
      bottom='0'
      right='0'
      padding='10px'
      justifyContent='end'
    >
      <Button
        onClick={ () => setShowForm( true ) }
      >
        + New Room
      </Button>

      {
        showForm ? <NewRoomForm setShowForm={ setShowForm } />
        : null
      }
    </Flex>
  );
}