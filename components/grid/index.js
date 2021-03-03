import { Inner } from './styles/grid';

export const Grid = ({ children, items, xs, gap, ...rest }) => {
  return (
    <Inner {...rest} items={items} xs={xs} gap={gap}>
      {children}
    </Inner>
  );
};

Grid.Item = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};
