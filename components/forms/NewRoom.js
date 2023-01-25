import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { GlobalContext } from '@/pages/_app';

import {
  Flex,
  Input,
  useToast,
  Button,
  FormLabel
} from '@chakra-ui/react';

export const NewRoomForm = ({ setShowForm }) => {
  const { userValue } = useContext( GlobalContext );
  const [ roomName, setRoomName ] = useState('');

  const toast = useToast();
  const router = useRouter();

  //this functions call the API page room/create to create new room
  const handleClick = async () => {
    //returns an error warning toast if room name is empty
    if( roomName === '' ) {
      toast({
        title: 'Room Name Empty',
        status: 'error',
        duration: 5000,
        isClosable: true,
        variant: 'solid',
        position: 'top'
      })
    }
    else {
      try {
        const response = await axios({
          method: 'post',
          url: '/api/room/create',
          data: {
            name: roomName,
            creator: userValue.name
          },
        });

        return response.data;
      }
      catch( error ) {
        console.log({ error });
      }
      finally {
        //this makes a toast || notification informing a new room is created
        toast({
          title: `${ roomName } Created`,
          status: 'success',
          duration: 5000,
          isClosable: true,
          variant: 'solid',
          position: 'top'
        })

        setShowForm( false );
        router.replace('/');
      }
    }
  }

  return (
    <Flex
      position='fixed'
      top='0'
      right='0'
      width='100%'
      height='100%'
      backgroundColor='rgba( 0, 0, 0, 0.7)'
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        direction='column'
        backgroundColor='gray.900'
        padding='60px 30px'
        gap='10px'
        border='2px solid'
        borderColor='gray.400'
        borderRadius='10px'
      >
        <FormLabel>Form Name:</FormLabel>
        <Input
          placeholder='Enter room name'
          value={ roomName }
          onChange={ (e) => setRoomName( e.target.value ) }
          variant='outline'
          borderColor='gray.500'
        />
        <Flex
          direction='row'
          justifyContent='space-around'
        >
          <Button
            onClick={ () => handleClick() }
          >
            Create
          </Button>
          <Button
            onClick={ () => setShowForm( false ) }
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};