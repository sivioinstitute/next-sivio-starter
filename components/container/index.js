import { Container as BodyContainer } from './styles/container';

export const Container = ({ children, ...rest }) => {
  return <BodyContainer {...rest}>{children}</BodyContainer>;
};
