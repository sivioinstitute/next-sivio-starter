import { useRouter } from 'next/router';
import { NavBar, MobileNav } from '@components';
import platforms from '../fixtures/platforms.json';

export const NavBarContainer = ({ dark }) => {
  const { pathname } = useRouter();
  return (
    <>
      <NavBar dark={dark}>
        <NavBar.Logo src="/images/svg/logo.svg" />
        <NavBar.ItemsContainer>
          <NavBar.ItemsRow>
            {platforms.map((platform, i) => (
              <NavBar.Item
                key={i}
                href={platform.link}
                passHref
                rel="noreferrer noopener"
                target="_blank"
              >
                {platform.name}
              </NavBar.Item>
            ))}
            <NavBar.Item href="/" active>
              Local Governance
            </NavBar.Item>
            <NavBar.Contact
              href="https://sivioinstitute.org"
              rel="noreferrer noopener"
              passHref
              target="_blank"
            >
              Sivio Institute
            </NavBar.Contact>
          </NavBar.ItemsRow>
          <NavBar.ItemsRow>
            <NavBar.Item
              href="/water"
              noLine
              active={pathname.startsWith('/water')}
            >
              Water
            </NavBar.Item>
            <NavBar.Item
              href="/refuse"
              noLine
              active={pathname.startsWith('/refuse')}
            >
              Refuse
            </NavBar.Item>
            <NavBar.Item
              href="/health"
              noLine
              active={pathname.startsWith('/health')}
            >
              Primary Health
            </NavBar.Item>
            <NavBar.Item
              href="/income"
              noLine
              active={pathname.startsWith('/income')}
            >
              Income & Expentiture
            </NavBar.Item>
          </NavBar.ItemsRow>
        </NavBar.ItemsContainer>
        <NavBar.Search>
          <img src="/images/svg/search.svg" alt="" />
          Search
        </NavBar.Search>
      </NavBar>

      {/* Mobile navigation */}
      <MobileNav>
        <MobileNav.Menu>
          <MobileNav.Item active={pathname === '/'} href="/">
            Home
          </MobileNav.Item>
          <MobileNav.Item active={pathname.startsWith('/water')} href="/water">
            Water Services
          </MobileNav.Item>
          <MobileNav.Item
            active={pathname.startsWith('/refuse')}
            href="/refuse"
          >
            Refuse Collection
          </MobileNav.Item>
          <MobileNav.Item
            active={pathname.startsWith('/health')}
            href="/health"
          >
            Primary Health
          </MobileNav.Item>
          <MobileNav.Item
            active={pathname.startsWith('/income')}
            href="/income"
          >
            INCOME & EXPENTITURE
          </MobileNav.Item>
        </MobileNav.Menu>
      </MobileNav>
    </>
  );
};
