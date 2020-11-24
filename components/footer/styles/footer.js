import styled from 'styled-components';

export const Background = styled.div`
  background: ${({ lightBg }) =>
    lightBg
      ? `url(./images/svg/footer-orange.svg) no-repeat top center;`
      : `url(./images/svg/footer-dark.svg) no-repeat top center;`};
  background-size: cover;
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  min-height: 300px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.7rem 0;
  color: var(--sivio-white);
`;

export const Col = styled.div`
  padding: 13rem 0 4rem 0;
`;

export const CtaText = styled.p`
  font-size: 20px;
  font-weight: 400;
  max-width: 272px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Heading = styled.h5`
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  max-width: 272px;
  margin-top: 0.5rem;
`;

export const Icon = styled.img`
  width: 60px;
  margin-right: 1rem;
  position: relative;
  top: -30px;
`;

export const Title = styled.p`
  display: inline;
  font-size: 20px;
  line-height: 120%;
  font-weight: 400;
  letter-spacing: 0.24em;
  text-transform: uppercase;
`;

export const OptForm = styled.form`
  display: flex;
`;

export const Input = styled.input`
  background: transparent;
  padding: 0.5rem 0.5rem;
  color: var(--sivio-white);
  border: 0;
  font-size: 20px;
  line-height: 21px;
  font-style: italic;
  min-width: 254px;
  margin-right: 0.5rem;
  border-bottom: 1px solid var(--sivio-white);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--sivio-white);
    opacity: 1;
  }
  &::-ms-input-placeholder {
    color: var(--sivio-white);
  }
  &::-ms-input-placeholder {
    color: var(--sivio-white);
  }
`;

export const SendButton = styled.button`
  background: ${({ lightBg }) =>
    lightBg ? 'var(--sivio-white)' : 'var(--sivio-orange)'};
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  img {
    filter: ${({ lightBg }) => (lightBg ? 'invert(0.7)' : 'unset')};
  }
`;
