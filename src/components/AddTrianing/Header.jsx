import styled from 'styled-components';

const HeaderEl = styled.h1`
  font-size: 3rem;
`;

function Header({ children }) {
  return <HeaderEl>{children}</HeaderEl>;
}

export default Header;
