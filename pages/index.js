import Head from 'next/head';
import styled from 'styled-components';

import { on } from '../styles/media';

const Heading = styled.h1`
  color: var(--sivio-orange);

  ${on.desktop`
    color: var(--sivio-green);
  `}
`;

export default function Home() {
  return (
    <div>
      <Heading>Welcome to the Sivio Starter kit</Heading>
    </div>
  );
}
