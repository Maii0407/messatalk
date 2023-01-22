import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';

import { GlobalContext } from './_app';
import { Header } from 'components/Header';
import { NewRoomBtn } from 'components/buttons/NewRoom';

import {
  Flex,
  Image,
  Text
} from "@chakra-ui/react"

export default function Home() {
  const { userValue, setUserValue } = useContext( GlobalContext );
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse( localStorage.getItem( 'userObj' ));

    if( user ) {
      setUserValue( user )
    }
    else if( !user ) {
      router.push( '/signup' )
    }
  }, []);

  if( userValue ) {
    return (
      <Flex
        direction='column'
      >
        <Header />
        <NewRoomBtn />
      </Flex>
    )
  }
}