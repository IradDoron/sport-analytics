import LabelEL from './styles/LabelEL';
import H2EL from './styles/H2EL';
import InputEL from './styles/InputEL';

function ExInput({ header }) {
  const lowerCaseHeader = header.toLowerCase();
  return (
    <>
      <H2EL>{header}</H2EL>
      <LabelEL>
        Sets:
        <InputEL type="number" name={`${lowerCaseHeader}Sets`} />
      </LabelEL>
      <LabelEL>
        Reps:
        <InputEL type="number" name={`${lowerCaseHeader}Reps`} />
      </LabelEL>
    </>
  );
}

export default ExInput;
