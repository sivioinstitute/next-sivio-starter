import React from 'react';
import styled from 'styled-components';

const HR = styled.hr`
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  border-color: var(--sivio-light-border);
`;

export const Divider = () => {
  return <HR />;
};
