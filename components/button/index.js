import { Button as StyledButton } from './styles/button';

export const Button = ({ children, dark, ...rest }) => {
  return (
    <StyledButton dark={dark} {...rest}>
      {children}
    </StyledButton>
  );
};
