import styled from 'styled-components';

export const Inner = styled.div`
  display: grid;
  ${({ items }) =>
    items
      ? `grid-template-columns: repeat(${items}, 1fr);`
      : 'grid-template-columns: 1fr'}
  ${({ gap }) => (gap ? `gap: ${gap}rem;` : '')};
  ${({ justifyCenter }) => (justifyCenter ? `justify-content: center` : '')};

  @media (max-width: 500px) {
    ${({ xs }) =>
      xs
        ? `grid-template-columns: repeat(${xs}, 1fr);`
        : 'grid-template-columns: 1fr'}
  }
`;
