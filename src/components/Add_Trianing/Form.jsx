import styled from "styled-components";
const FormEL = styled.form`
  font-size: 3rem;
`;
const LabelEL = styled.label`
  font-size: 3rem;
`;
const InputEL = styled.input`
  font-size: 3rem;
`;
const H2EL = styled.h2`
  font-size: 3rem;
`;
const ButtonEL = styled.button`
  font-size: 3rem;
`;

function Form() {
  return (
    <FormEL>
      <LabelEL>
        Your Trianig Date:
        <InputEL type="date" />
      </LabelEL>
      <H2EL>Running</H2EL>
      <LabelEL>
        running duration:
        <InputEL type="time" />
      </LabelEL>
      <LabelEL>
        Distance (KM):
        <InputEL type="number" />
      </LabelEL>
      <LabelEL>
        Are you training in intervale?
        <InputEL type="number" />
      </LabelEL>
      <H2EL>Pullups</H2EL>
      <LabelEL>
        Sets:
        <InputEL type="number" />
      </LabelEL>
      <LabelEL>
        Reps:
        <InputEL type="number" />
      </LabelEL>
      <H2EL>Pushups</H2EL>
      <LabelEL>
        Sets:
        <InputEL type="number" />
      </LabelEL>
      <LabelEL>
        Reps:
        <InputEL type="number" />
      </LabelEL>
      <H2EL>Squats</H2EL>
      <LabelEL>
        Sets:
        <InputEL type="number" />
      </LabelEL>
      <LabelEL>
        Reps:
        <InputEL type="number" />
      </LabelEL>
      <LabelEL>
        Feeling:
        <InputEL type="number" />
      </LabelEL>
      <ButtonEL type="submit">Submit</ButtonEL>
    </FormEL>
  );
}

export default Form;
