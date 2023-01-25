import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';

import dbConnect from 'lib/dbConnect';
import Room from 'model/Room';

import { GlobalContext } from './_app';
import { Header } from 'components/Header';
import { NewRoomBtn } from 'components/buttons/NewRoom';
import { RoomComp } from 'components/RoomComponent';

import {
  Flex,
  Image,
  Text
} from "@chakra-ui/react"

export default function Home({ allRooms }) {
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
    console.log({ allRooms });

    return (
      <Flex
        direction='column'
        marginTop='60px'
      >
        <Header />

        <Flex
          marginBottom='100px'
          direction='column'
          gap='10px'
        >
          {
            allRooms.map(( element ) => {
              return <RoomComp key={ element._id } roomData={ element } />
            })
          }
        </Flex>

        <NewRoomBtn />
      </Flex>
    )
  }
}

export async function getServerSideProps() {
  try {
    await dbConnect();

    const allRooms = await Room.find().sort({ date: -1 });

    return {
      props: {
        allRooms: JSON.parse( JSON.stringify( allRooms )),
      }
    }
  }
  catch( error ) {
    console.log({ error });
    return {
      notFound: true
    }
  }
};