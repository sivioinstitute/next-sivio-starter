import Head from 'next/head';
import styled from 'styled-components';
import { Typography, Button } from '@components';
import { NavBarContainer, FooterContainer } from '@containers';

import * as BREAK_POINTS from '../styles/media';

const Heading = styled.h1`
  color: var(--sivio-blue-grey);

  ${BREAK_POINTS.Mobile`
    color: var(--sivio-green);
  `}
`;

export default function Home() {
  return (
    <div>
      <NavBarContainer />
      <Typography.H2>Test</Typography.H2>
      <Button>Button</Button>
      <Heading>Welcome to the Sivio Starter kit</Heading>
      <FooterContainer />
    </div>
  );
}
