import React, { useContext } from 'react';

import { GlobalContext } from '@/pages/_app';

import {
  Flex,
  Text,
  Image
} from '@chakra-ui/react';

export const Header = () => {
  const { userValue } = useContext( GlobalContext )

  return (
    <Flex
      direction='row'
      alignItems='center'
      padding='5px'
      backgroundColor='gray.900'
      gap='10px'
      position='fixed'
      top='0'
      right='0'
      width='100%'
    >
      <Image
        src={ userValue.avatar }
        alt={ userValue.name }
        width='40px'
      />
      <Text>{ userValue.name }</Text>
    </Flex>
  );
};