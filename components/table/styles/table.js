import styled from 'styled-components';

export const Inner = styled.div`
  @media (max-width: 500px) {
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Header = styled.thead``;

export const Body = styled.tbody``;

export const TH = styled.th`
  padding: 12px 8px;
  background-color: var(--sivio-blue-grey);
  color: white;
`;

export const TR = styled.tr`
  &:nth-child(even),
  &:hover {
    background-color: rgba(38, 65, 87, 0.068);
  }
`;

export const TD = styled.td`
  border: 1px solid rgba(55, 76, 91, 0.158);
  padding: 8px;
  text-align: right;

  &:nth-of-type(1) {
    font-weight: 600;
    text-align: left;
  }
`;
