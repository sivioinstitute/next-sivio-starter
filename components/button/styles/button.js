import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: 148px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 46px;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
  color: var(--sivio-white);
  background: var(--sivio-orange);
  cursor: pointer;
  border: 0;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  /* Styled for the orange button */
  ${({ dark }) =>
    dark &&
    css`
      background: var(--sivio-blue-grey);
    `}
`;
