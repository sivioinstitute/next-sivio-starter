import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--sivio-light-border);
  padding-top: 0.5rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: 0.7rem 0;
`;

export const LogoContainer = styled.div`
  border-right: 1px solid var(--sivio-light-border);
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 90%;
`;

export const LogoText = styled.span`
  color: var(--sivio-light-text);
  display: block;
  width: 90%;
  padding-top: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  height: 100%;
  width: 97%;
  margin: auto;

  > ul:first-of-type {
    border-bottom: 1px solid var(--sivio-light-border);
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
  cursor: pointer;
  color: ${({ active }) =>
    active ? 'var(--sivio-orange)' : 'var(--sivio-blue-grey)'};

  &:after {
    position: absolute;
    display: ${({ active }) => (active ? 'block' : 'none')};
    content: '';
    top: -2.35rem;
    left: -3px;
    width: calc(100% + 6px);
    height: 5px;
    background: var(--sivio-orange);
  }

  &:hover {
    color: var(--sivio-orange);
  }

  &:hover :after {
    display: block;
  }
`;

export const Contact = styled(Item)`
  margin-right: 0;
  position: absolute;
  right: 0;
`;

export const Menu = styled(Item)`
  margin-right: 0;
  color: var(--sivio-orange);
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;

  img {
    position: relative;
    top: -2px;
    margin-right: 0.5rem;
  }
`;

export const SearchButtonContainer = styled.div`
  border-left: 1px solid var(--sivio-light-border);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchButton = styled.button`
  width: 90%;
  max-width: 150px;
  background: #eaeaea;
  border: 0;
  color: var(--sivio-light-button);
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
  }
`;
