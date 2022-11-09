import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavProps = {
  name: string;
  pathRedirection: string;
  backgroundColor: string;
};
const LiItem = styled.li<Pick<NavProps, 'backgroundColor'>>`
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  padding: 8px 16px;
  margin: auto 8px;
  flex: 1;
`;

const NavItem = ({ pathRedirection, name, backgroundColor }: NavProps) => {
  return (
    <LiItem backgroundColor={backgroundColor}>
      <Link to={pathRedirection}>{name}</Link>
    </LiItem>
  );
};

export default NavItem;
