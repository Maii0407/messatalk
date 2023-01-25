import React from 'react';
import NextLink from 'next/link';

import {
  Flex,
  Text
} from '@chakra-ui/react';

export const RoomComp = ({ roomData }) => {
  return (
    <Flex
      as={ NextLink }
      href={ `/room/${ roomData._id }` }
      border='2px solid red'
      padding='10px'
    >
      <Text>{ roomData.name }</Text>
    </Flex>
  );
};