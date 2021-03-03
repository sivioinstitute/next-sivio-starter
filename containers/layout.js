import { Layout } from '@components';
import { FooterContainer } from './footer';
import { NavBarContainer } from './navbar';

export const LayoutContainer = ({ children, fluid, ...rest }) => {
  return (
    <div {...rest}>
      <NavBarContainer />
      {fluid ? children : <Layout>{children}</Layout>}
      <FooterContainer />
    </div>
  );
};
