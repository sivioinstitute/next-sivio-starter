import React from 'react';
import {
  Wrapper,
  Container,
  LogoContainer,
  Logo,
  ItemsContainer,
  ItemsRow,
  Item,
  Menu,
  Contact,
  SearchButtonContainer,
  SearchButton,
  LogoText,
} from './styles/navbar';

export const NavBar = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <Container {...rest}>{children}</Container>
    </Wrapper>
  );
};

NavBar.Logo = ({ src, title, alt = '', ...rest }) => {
  return (
    <LogoContainer>
      <Logo {...rest} src={src} alt={alt} />
      <LogoText>Trackers</LogoText>
    </LogoContainer>
  );
};

NavBar.ItemsContainer = ({ children, ...rest }) => {
  return <ItemsContainer {...rest}>{children}</ItemsContainer>;
};

NavBar.ItemsRow = ({ children, ...rest }) => {
  return <ItemsRow {...rest}>{children}</ItemsRow>;
};

NavBar.Item = ({ children, active, ...rest }) => {
  return (
    <Item active={active} {...rest}>
      {children}
    </Item>
  );
};

NavBar.Contact = ({ children, ...rest }) => {
  return <Contact {...rest}>{children}</Contact>;
};

NavBar.Menu = ({ children, ...rest }) => {
  return (
    <Menu {...rest}>
      <img src="/images/svg/menu-orange.svg" alt="" />
      {children}
    </Menu>
  );
};

NavBar.Search = ({ children, ...rest }) => {
  return (
    <SearchButtonContainer>
      <SearchButton {...rest}>{children}</SearchButton>
    </SearchButtonContainer>
  );
};
