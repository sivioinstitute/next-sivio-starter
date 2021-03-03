import styled from 'styled-components';

const backgroundPicker = (color) => {
  switch (color) {
    case 'green':
      return 'var(--sivio-green)';
    case 'blue-grey':
      return 'var(--sivio-blue-grey)';
    case 'orange':
      return 'var(--sivio-orange)';
    default:
      return 'var(--sivio-light-button)';
  }
};

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 15px;
  border-radius: 3px;
  position: relative;
  background: var(--sivio-light-border);
`;

export const InnerBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ value }) => value}%;
  border-radius: 3px;
  background: ${({color}) => color ? backgroundPicker(color) : backgroundPicker('other')};
`;
