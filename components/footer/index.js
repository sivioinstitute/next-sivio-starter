import { createContext, useContext } from 'react';
import { Layout } from '@components';
import Image from 'next/image';

import {
  Background,
  Container,
  CtaText,
  Col,
  Heading,
  Title,
  Icon,
  Header,
  OptForm,
  Input,
  SendButton,
} from './styles/footer';

const FooterContext = createContext();

export const Footer = ({ children, lightBg, ...rest }) => {
  return (
    <FooterContext.Provider value={{ lightBg }}>
      <Background lightBg={lightBg}>
        <Layout>
          <Container {...rest}>{children}</Container>
        </Layout>
      </Background>
    </FooterContext.Provider>
  );
};

Footer.Col = ({ children, ...rest }) => {
  return <Col {...rest}>{children}</Col>;
};

Footer.Header = ({ children, ...rest }) => {
  return <Header {...rest}>{children}</Header>;
};

Footer.CtaText = ({ children, ...rest }) => {
  return <CtaText {...rest}>{children}</CtaText>;
};

Footer.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

Footer.Icon = ({ ...rest }) => {
  const { lightBg } = useContext(FooterContext);
  return (
    <Icon
      src={
        lightBg ? './images/svg/mail-dark.svg' : './images/svg/mail-orange.svg'
      }
      {...rest}
    />
  );
};

Footer.Heading = ({ children, ...rest }) => {
  return <Heading {...rest}>{children}</Heading>;
};

Footer.OptForm = ({ children, ...rest }) => {
  return <OptForm {...rest}>{children}</OptForm>;
};

Footer.SendButton = ({ ...rest }) => {
  const { lightBg } = useContext(FooterContext);
  return (
    <SendButton {...rest} lightBg={lightBg}>
      <Image src="/images/svg/arrow.svg" alt="" width={25} height={30} />
    </SendButton>
  );
};

Footer.Input = ({ placeholder, ...rest }) => {
  return <Input placeholder={placeholder} {...rest} />;
};
