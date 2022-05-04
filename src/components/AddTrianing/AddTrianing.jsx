import styled from 'styled-components';
import Header from './Header';
import Form from './Form';
import Button from '../Button/Button';

function AddTrianing() {
  const headerContent = 'Welcome to your Training App';

  return (
    <>
      <Header>{headerContent}</Header>
      <Form />
    </>
  );
}

export default AddTrianing;
/*
header
form
toggle
dark Mode
settings 
*/
