import styled, { css } from 'styled-components';

const fontWeightMixin = css`
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  margin-bottom: 1rem;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'initial')};
  ${({ small }) => (small ? 'font-size: 90%;' : '')};
  ${({ center }) => (center ? 'text-align: center;' : '')}
  ${({ capitalize }) => (capitalize ? 'text-transform: capitalize;' : '')}
`;

const fontColorMixin = css`
  color: ${({ orange, green }) =>
    orange || green
      ? orange
        ? 'var(--sivio-orange)'
        : 'var(--sivio-green)'
      : 'var(--sivio-blue-grey)'};
`;

const gutterMixin = css`
  ${({ gutterBottom }) => (gutterBottom ? 'margin-bottom: 2rem;' : '')};
`;

export const H1 = styled.h1`
  font-size: 56px;
  line-height: 47.88px;
  ${fontWeightMixin}

  @media(max-width: 500px) {
    font-size: 35px;
    line-height: 30px;
    font-weight: 600;
  }
`;

export const H2 = styled.h2`
  font-size: 48px;
  line-height: 48px;
  ${fontWeightMixin}
  ${gutterMixin}
  font-family: ${({ times }) =>
    times ? 'var(--font-times)' : 'var(--font-family)'};

  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const H3 = styled.h3`
  font-size: 40px;
  line-height: 40px;
  ${fontWeightMixin}
`;

export const H4 = styled.h4`
  font-size: 32px;
  line-height: 27.36px;
  ${fontWeightMixin}

  @media(max-width: 500px) {
    font-size: 25px;
    line-height: 20px;
    font-weight: 600;
  }
`;

export const H5 = styled.h5`
  font-size: 24px;
  ${fontWeightMixin}
  ${fontColorMixin}
  ${gutterMixin}
`;

export const H6 = styled.h6`
  font-size: 16px;
  ${fontColorMixin}
`;

export const P = styled.p`
  line-height: 35px;
  font-size: ${({ lead }) => (lead ? '22px' : '18px')};
  font-family: ${({ times }) =>
    times ? 'var(--font-times)' : 'var(--font-family)'};
  font-style: ${({ italic }) => (italic ? 'italic' : 'initial')};
  ${gutterMixin}
  ${fontWeightMixin}
  ${fontColorMixin}

  @media(max-width: 500px) {
    line-height: 25px;
  }
`;
