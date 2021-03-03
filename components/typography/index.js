import { H1, H2, H3, H4, H5, H6, P } from './styles/typography';

export const Typography = ({
  children,
  times,
  italic,
  gutterBottom,
  lead,
  center,
  ...rest
}) => {
  return (
    <P
      {...rest}
      lead={lead}
      times={times}
      italic={italic}
      center={center}
      gutterBottom={gutterBottom}
    >
      {children}
    </P>
  );
};

Typography.H1 = ({ children, ...rest }) => {
  return <H1 {...rest}>{children}</H1>;
};

Typography.H2 = ({ children, gutterBottom, times, ...rest }) => {
  return (
    <H2 {...rest} times={times} gutterBottom={gutterBottom}>
      {children}
    </H2>
  );
};

Typography.H3 = ({ children, ...rest }) => {
  return <H3 {...rest}>{children}</H3>;
};

Typography.H4 = ({ children, ...rest }) => {
  return <H4 {...rest}>{children}</H4>;
};

Typography.H5 = ({ children, orange, gutterBottom, ...rest }) => {
  return (
    <H5 {...rest} orange={orange} gutterBottom={gutterBottom}>
      {children}
    </H5>
  );
};

Typography.H6 = ({ children, orange, ...rest }) => {
  return (
    <H6 {...rest} orange={orange}>
      {children}
    </H6>
  );
};
