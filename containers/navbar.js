import React from 'react';
import { NavBar } from '@components';

export const NavBarContainer = () => {
  return (
    <NavBar>
      <NavBar.Logo src="/images/svg/logo.svg" />
      <NavBar.ItemsContainer>
        <NavBar.ItemsRow>
          <NavBar.Item>Public policy</NavBar.Item>
          <NavBar.Item>Local governance</NavBar.Item>
          <NavBar.Item>Budget</NavBar.Item>
          <NavBar.Item active>African Citizenship Index</NavBar.Item>
          <NavBar.Contact>Contact us</NavBar.Contact>
        </NavBar.ItemsRow>
        <NavBar.ItemsRow>
          <NavBar.Item>About</NavBar.Item>
          <NavBar.Item>Countries</NavBar.Item>
          <NavBar.Item>Themes</NavBar.Item>
          <NavBar.Item>Publications</NavBar.Item>
          <NavBar.Item>Visualisations</NavBar.Item>
          <NavBar.Menu>More</NavBar.Menu>
        </NavBar.ItemsRow>
      </NavBar.ItemsContainer>
      <NavBar.Search>
        <img src="/images/svg/search.svg" alt="" />
        Search
      </NavBar.Search>
    </NavBar>
  );
};
