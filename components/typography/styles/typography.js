import styled, { css } from 'styled-components';

const fontWeightMixin = css`
  font-weight: 500;
`;

export const H1 = styled.h1`
  font-size: 56px;
  line-height: 47.88px;
  ${fontWeightMixin}
`;

export const H2 = styled.h2`
  font-size: 48px;
  line-height: 48px;
  ${fontWeightMixin}
`;

export const H3 = styled.h3`
  font-size: 40px;
  line-height: 40px;
  ${fontWeightMixin}
`;

export const H4 = styled.h4`
  font-size: 32px;
  line-height: 27.36px;
  font-weight: 400;
`;

export const H5 = styled.h5`
  font-size: 24px;
`;

export const H6 = styled.h6`
  font-size: 16px;
`;

export const P = styled.p`
  font-size: 1rem;
`;
