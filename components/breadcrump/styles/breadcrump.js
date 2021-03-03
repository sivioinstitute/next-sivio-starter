import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  a:last-child {
    color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
    span:nth-of-type(2) {
      display: none;
    }
  }
`;

export const Item = styled.a`
  color: var(--sivio-green);
  margin-right: 10px;
  width: max-content;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  place-items: center;
  cursor: pointer;

  span:nth-of-type(2) {
    font-size: 24px;
    margin-left: 7px;
    position: relative;
    top: -1px;
  }
  @media (max-width) {
    font-size: 16px;
  }
`;
