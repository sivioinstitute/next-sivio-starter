import { Alert as StyledAlert } from './styles/alert';

export const Alert = ({ children, ...rest }) => {
  return (
    <StyledAlert {...rest}>
      <p>{children}</p>
    </StyledAlert>
  );
};
