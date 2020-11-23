import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--sivio-light-border);
  padding-top: 0.5rem;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: 0.7rem 0;
`;
