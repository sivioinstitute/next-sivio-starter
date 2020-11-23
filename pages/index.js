import Head from 'next/head';
import styled from 'styled-components';
import { NavBarContainer } from '../containers/navbar';

import * as media from '../styles/media';

const Heading = styled.h1`
  color: var(--sivio-blue-grey);

  ${media.Mobile`
    color: var(--sivio-green);
  `}
`;

export default function Home() {
  return (
    <div>
      <NavBarContainer />
      <Heading>Welcome to the Sivio Starter kit</Heading>
    </div>
  );
}
