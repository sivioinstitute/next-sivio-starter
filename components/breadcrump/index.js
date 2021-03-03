import Link from 'next/link';
import { Container, Item } from './styles/breadcrump';

export const BreadCrump = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

BreadCrump.Item = ({ children, href, ...rest }) => {
  return (
    <Link href={href}>
      <Item {...rest}>
        <span>{children}</span>
        <span>›</span>
      </Item>
    </Link>
  );
};
