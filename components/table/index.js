import {
  Body,
  Inner,
  Table as StyledTable,
  Header,
  TR,
  TH,
  TD,
} from './styles/table';

export const Table = ({ children }) => {
  return (
    <Inner>
      <StyledTable>{children}</StyledTable>
    </Inner>
  );
};

Table.THead = ({ children }) => {
  return <Header>{children}</Header>;
};

Table.TBody = ({ children }) => {
  return <Body>{children}</Body>;
};

Table.TR = ({ children }) => {
  return <TR>{children}</TR>;
};

Table.TH = ({ children }) => {
  return <TH>{children}</TH>;
};

Table.TD = ({ children }) => {
  return <TD>{children}</TD>;
};
