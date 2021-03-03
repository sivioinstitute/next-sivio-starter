import { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { Layout } from '@components';

import {
  Wrapper,
  Container as NavContainer,
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
  MobileContainer,
  MobileMenu,
  MobileItem,
} from './styles/navbar';

const NavBarContext = createContext(false);

export const NavBar = ({ children, dark, ...rest }) => {
  return (
    <Wrapper dark={dark}>
      <Layout>
        <NavBarContext.Provider value={{ dark }}>
          <NavContainer {...rest}>{children}</NavContainer>
        </NavBarContext.Provider>
      </Layout>
    </Wrapper>
  );
};

NavBar.Logo = ({ src, title, alt = '', ...rest }) => {
  const { dark } = useContext(NavBarContext);
  return (
    <LogoContainer dark={dark}>
      <Logo {...rest} src={src} alt={alt} />
      <LogoText dark={dark}>
        <Link href="/" active>
          Tracker
        </Link>{' '}
        |{' '}
        <Link href="https://localgovrepo.zimcitizenswatch.org" passHref>
          Repository
        </Link>
      </LogoText>
    </LogoContainer>
  );
};

NavBar.ItemsContainer = ({ children, ...rest }) => {
  const { dark } = useContext(NavBarContext);
  return (
    <ItemsContainer {...rest} dark={dark}>
      {children}
    </ItemsContainer>
  );
};

NavBar.ItemsRow = ({ children, ...rest }) => {
  return <ItemsRow {...rest}>{children}</ItemsRow>;
};

NavBar.Item = ({ children, active, passHref, noLine, href = '', ...rest }) => {
  const { dark } = useContext(NavBarContext);
  return (
    <Item active={active} dark={dark} noLine={noLine}>
      <Link href={href} passHref={passHref}>
        <a {...rest}>{children}</a>
      </Link>
    </Item>
  );
};

NavBar.Contact = ({ children, href, passHref, ...rest }) => {
  const { dark } = useContext(NavBarContext);
  return (
    <Contact {...rest} dark={dark}>
      <Link href={href} passHref={passHref}>
        <a {...rest}>{children}</a>
      </Link>
    </Contact>
  );
};

NavBar.Menu = ({ children, open, ...rest }) => {
  return (
    <Menu>
      <span style={{ paddingRight: 5 }}>{children}</span>
      <img
        src={'/images/svg/mobile-menu.svg'}
        {...rest}
        alt="Menu"
        style={{ width: open ? 0 : 25, height: open ? 0 : 'auto' }}
      />
      <img
        src={'/images/svg/close.svg'}
        {...rest}
        alt="Close menu"
        style={{ width: open ? 20 : 0, height: open ? 'auto' : 0, right: 9 }}
      />
    </Menu>
  );
};

NavBar.Search = ({ children, ...rest }) => {
  const { dark } = useContext(NavBarContext);
  return (
    <SearchButtonContainer dark={dark}>
      <SearchButton {...rest} dark={dark}>
        {children}
      </SearchButton>
    </SearchButtonContainer>
  );
};

export const MobileNav = ({ children, ...rest }) => {
  const [mobileNavOpen, setMobileNav] = useState(false);
  return (
    <>
      <MobileContainer {...rest}>
        <Link href="/">
          <a>
            <Logo
              style={{ maxWidth: 130, position: 'relative', top: 4 }}
              src="/images/svg/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>
        <NavBar.Menu
          open={mobileNavOpen}
          style={{ opacity: 0.8, position: 'relative', right: 5 }}
          onClick={() => setMobileNav(!mobileNavOpen)}
        >
          {mobileNavOpen ? 'Close' : 'Menu'}
        </NavBar.Menu>
      </MobileContainer>
      {mobileNavOpen ? children : null}
    </>
  );
};

MobileNav.Menu = ({ children, ...rest }) => {
  return <MobileMenu {...rest}>{children}</MobileMenu>;
};

MobileNav.Item = ({ children, active, href = '/', ...rest }) => {
  return (
    <MobileItem {...rest} active={active}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </MobileItem>
  );
};
