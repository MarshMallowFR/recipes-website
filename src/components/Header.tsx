import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import NavItem from './NavItem';

const HeaderWrapper = styled.header`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 150px;
  margin: 32px auto;
`;

const Nav = styled.nav`
  width: 70%;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const navItems = [
    {
      name: 'menu',
      pathRedirection: '/',
      backgroundColor: '#f09a9a',
    },
    {
      name: 'stores',
      pathRedirection: '/stores',
      backgroundColor: '#c9c748',
    },
    {
      name: 'ingredients',
      pathRedirection: '/ingredients',
      backgroundColor: '#faaf7f',
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} />
      <Nav>
        <Ul>
          {navItems.map((item, index) => (
            <NavItem key={`${item.name}_${index}`} {...item} />
          ))}
        </Ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
