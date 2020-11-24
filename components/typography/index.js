import { H1, H2, H3, H4, H5, H6, P } from './styles/typography';

export const Typography = ({ children, ...rest }) => {
  return <P {...rest}>{children}</P>;
};

Typography.H1 = ({ children, ...rest }) => {
  return <H1 {...rest}>{children}</H1>;
};

Typography.H2 = ({ children, ...rest }) => {
  return <H2 {...rest}>{children}</H2>;
};

Typography.H3 = ({ children, ...rest }) => {
  return <H3 {...rest}>{children}</H3>;
};

Typography.H4 = ({ children, ...rest }) => {
  return <H4 {...rest}>{children}</H4>;
};

Typography.H5 = ({ children, ...rest }) => {
  return <H5 {...rest}>{children}</H5>;
};

Typography.H6 = ({ children, ...rest }) => {
  return <H6 {...rest}>{children}</H6>;
};
