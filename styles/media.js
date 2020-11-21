import { css } from 'styled-components';

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '992px',
  largerDesktop: '1200px',
};

export const on = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
