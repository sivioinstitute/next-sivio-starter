import { Container } from './styles/layout';

export const Layout = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
