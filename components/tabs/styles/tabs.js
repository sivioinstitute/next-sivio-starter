import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid var(--sivio-light-border);
`;

export const Tab = styled.button`
  position: relative;
  top: 1px;
  font-size: 17px;
  padding: 0.4rem 1rem 0.4rem 0.4rem;
  margin-right: 30px;
  font-weight: 600;
  color: ${({ active }) =>
    active ? 'var(--sivio-orange)' : 'var(--sivio-blue-grey)'};
  cursor: pointer;
  background: transparent;
  border: 0;
  border-bottom: 3px solid;
  border-color: ${({ active }) =>
    active ? 'var(--sivio-orange)' : 'transparent'};
  cursor: pointer;

  &:hover {
    color: var(--sivio-orange);
  }
  &:focus {
    outline: 0;
  }

  img {
    height: 22px;
    padding-right: 10px;
    position: relative;
    top: 6px;
  }
`;

export const Panel = styled.div`
  padding-top: 30px;
`;
