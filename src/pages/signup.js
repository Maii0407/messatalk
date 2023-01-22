import { useState, useContext } from "react";
import { GlobalContext } from "./_app";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { createAvatar } from "@dicebear/core";
import { adventurerNeutral } from "@dicebear/collection";

import { returnRandomSeed } from "lib/diceBearAvatar";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export default function SignUp() {
  const { setUserValue } = useContext( GlobalContext );
  const router = useRouter();

  const [ userName, setUserName ] = useState('');

  const handleClick = async () => {
    if( userName !== '' ) {
      const avatar = await createAvatar( adventurerNeutral, {
        seed: returnRandomSeed(),
        backgroundType: [ 'gradientLinear' ],
        backgroundColor: [ "b6e3f4","c0aede","d1d4f9", 'ffd5dc', 'ffdfbf' ],
        glasses: [ 'variant01', 'variant02', 'variant03', 'variant04', 'variant05' ],
        glassesProbability: 70,
        radius: 40,
      }).toDataUri();

      const userObj = {
        name: `${ userName }-${ nanoid(10) }`,
        avatar: avatar.toString()
      }

      localStorage.setItem( 'userObj', JSON.stringify( userObj ));
      setUserValue( userObj );
      router.push('/');
    }

    return;
  };

  return (
    <Flex
      direction='column'
      border='1px solid'
      borderColor='gray.500'
      padding='30px 10px'
    >
      <Heading textAlign='center'>
        Talk
      </Heading>

      <FormControl
        isRequired
        padding='10px'
        marginBottom='10px'
      >
        <FormLabel>User Name</FormLabel>
        <Input
          value={ userName }
          onChange={ (e) => setUserName( e.target.value ) }
          variant='outline'
          borderColor='gray.500'
          placeholder='Please Enter Username'
        />
      </FormControl>

      <Button
        onClick={ () => handleClick() }
      >
        Enter
      </Button>

    </Flex>
  )
}