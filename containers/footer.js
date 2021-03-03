import { Footer } from '@components';

export const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Col>
        <Footer.Header>
          <Footer.Icon />
          <Footer.Title>Newsletter</Footer.Title>
        </Footer.Header>

        <Footer.Heading>Data delivered to your inbox</Footer.Heading>
      </Footer.Col>
      <Footer.Col>
        <Footer.CtaText>
          Stay in the loop with our latest updates.
        </Footer.CtaText>
      </Footer.Col>
      <Footer.Col>
        <Footer.OptForm>
          <Footer.Input placeholder="Enter email" />
          <Footer.SendButton />
        </Footer.OptForm>
      </Footer.Col>
    </Footer>
  );
};
