import styled from "styled-components";

const HeaderEl = styled.h1`
  font-size: 3rem;
`;

function Header({ content }) {
  return <HeaderEl>{content}</HeaderEl>;
}

export default Header;
