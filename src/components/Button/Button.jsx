import styled from 'styled-components';

const ButtonEL = styled.button`
  font-size: 3rem;
`;

function Button({ content, className }) {
  return <ButtonEL ClassName={className}>{content}</ButtonEL>;
}

export default Button;
