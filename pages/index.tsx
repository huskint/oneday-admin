import React from 'react';
import type { NextPage } from 'next';
import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

const Home: NextPage = () => (
  <>
    <p>Home</p>
    <StyleButton colorScheme="teal" variant="solid" disabled>
      안녕하세요.
    </StyleButton>
  </>
);

export default Home;

const StyleButton = styled(Button)`
  background-color: #d2d2d2 !important;
`;
