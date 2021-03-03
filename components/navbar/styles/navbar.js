import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid
    ${({ dark }) =>
      dark ? 'rgba(255,255,255,0.12)' : 'var(--sivio-light-border)'};
  padding-top: 0.5rem;
  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: 0.7rem 0;
`;

export const LogoContainer = styled.div`
  border-right: 1px solid
    ${({ dark }) =>
      dark ? 'rgba(255,255,255,0.12)' : 'var(--sivio-light-border)'};
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 85%;
`;

export const LogoText = styled.span`
  position: relative;
  top: 3px;
  a {
    color: ${({ dark }) =>
      dark ? 'rgba(255,255,255,0.5)' : 'var(--sivio-blue-grey)'};
    text-transform: uppercase;
    text-align: center;
    font-weight: ${({ dark }) => (dark ? '600' : '600')};
    font-size: 16px;
    text-decoration: none;

    &:first-of-type {
      color: var(--sivio-green);
    }
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  height: 100%;
  width: 97%;
  margin: auto;

  > ul:first-of-type {
    border-bottom: 1px solid
      ${({ dark }) =>
        dark ? 'rgba(255,255,255,0.12)' : 'var(--sivio-light-border)'};
  }
`;

export const ItemsRow = styled.ul`
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  padding-top: 0.4rem;
  list-style: none;
`;

export const Item = styled.li`
  text-transform: uppercase;
  margin-right: 2rem;
  position: relative;
  letter-spacing: 0.01rem;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: ${({ active, dark }) =>
    active
      ? 'var(--sivio-green)'
      : `${dark ? 'var(--sivio-white)' : 'var(--sivio-blue-grey)'}`};

  &:after {
    position: absolute;
    display: ${({ active, noLine }) => (active && !noLine ? 'block' : 'none')};
    content: '';
    top: -2.35rem;
    z-index: 100;
    left: -3px;
    width: calc(100% + 6px);
    height: 5px;
    background: var(--sivio-green);
  }

  &:hover {
    color: var(--sivio-green);
  }

  &:hover :after {
    display: block;
  }
  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    min-width: max-content;
  }
`;

export const Contact = styled(Item)`
  margin-right: 0;
  position: absolute;
  right: 0;
`;

export const Menu = styled(Item)`
  margin-right: 0;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;

  img {
    position: relative;
    top: -2px;
    margin-right: 0.5rem;
  }
  span {
    color: var(--sivio-blue-grey);
  }
`;

export const SearchButtonContainer = styled.div`
  border-left: 1px solid
    ${({ dark }) =>
      dark ? 'rgba(255,255,255,0.12)' : 'var(--sivio-light-border)'};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchButton = styled.button`
  width: 90%;
  max-width: 150px;
  background: ${({ dark }) => (dark ? '#597080' : '#eaeaea')};
  border: 0;
  color: ${({ dark }) =>
    dark ? 'rgba(255,255,255,0.5)' : 'var(--sivio-light-button)'};
  line-height: 38px;
  font-size: 15px;
  font-weight: 500;
  font-family: var(--font-family);
  height: 51px;
  cursor: pointer;
  position: relative;

  img {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    filter: ${({ dark }) => (dark ? 'invert(1)' : 'initial')};
  }
`;

// Mobile navigation

export const MobileContainer = styled(Wrapper)`
  padding: 0 0.5rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  @keyframes slide {
    0% {
      opacity: 0;
      left: 101vw;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
  animation: slide 300ms linear;
  height: calc(100vh - 70px);
  width: 100vw;
  list-style: none;
  background-color: #ffffff;
  z-index: 10;
  position: absolute;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const MobileItem = styled.li`
  padding: 1.4rem 0.5rem;
  border-bottom: 1px solid var(--sivio-light-border);
  ${({ active }) =>
    active ? 'border-left: 7px solid var(--sivio-green);' : ''}
  font-weight: 600;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: ${({ active }) => (active ? 'var(--sivio-green)' : 'inherit')};
    display: block;
  }
`;
