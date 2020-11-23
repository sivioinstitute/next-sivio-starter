import { css } from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '992px',
  largeScreen: '1200px',
};

const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const Mobile = respondTo.mobile;
export const Tablet = respondTo.tablet;
export const Desktop = respondTo.desktop;
export const LargeScreen = respondTo.largeScreen;
