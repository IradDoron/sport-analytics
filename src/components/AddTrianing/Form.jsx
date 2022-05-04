import styled from 'styled-components';

import ExInput from './ExInput';

import LabelEL from './styles/LabelEL';
import H2EL from './styles/H2EL';
import InputEL from './styles/InputEL';

const FormEL = styled.form`
  font-size: 1rem;
`;

const ButtonEL = styled.button`
  font-size: 1rem;
`;

function handleSubmit(e) {
  e.preventDefault();
  const formEl = e.target;

  const submitData = {
    date: formEl.date.value,
    runTime: formEl.runTime.value,
    distance: formEl.distance.value,
    interval: formEl.interval.value,
    pullupsSets: formEl.pullupsSets.value,
    pullupsReps: formEl.pullupsReps.value,
    pushupsSets: formEl.pushupsSets.value,
    pushupsReps: formEl.pushupsReps.value,
    squatsSets: formEl.squatsSets.value,
    squatsReps: formEl.squatsReps.value,
    feeling: formEl.feeling.value,
  };

  console.log(submitData);

  // convert and format to json
  // fetch() => POST
}
function Form() {
  return (
    <FormEL onSubmit={(e) => handleSubmit(e)}>
      <LabelEL>
        Your Trianig Date:
        <InputEL type="date" name="date" />
      </LabelEL>
      <H2EL>Running</H2EL>
      <LabelEL>
        running duration:
        <InputEL type="number" name="runTime" />
      </LabelEL>
      <LabelEL>
        Distance (KM):
        <InputEL type="number" name="distance" />
      </LabelEL>
      <LabelEL>
        Number of intervals:
        <InputEL type="number" name="interval" />
      </LabelEL>
      <ExInput header="Pullups" />
      <ExInput header="Pushups" />
      <ExInput header="Squats" />

      <LabelEL>
        Feeling:
        <InputEL type="number" name="feeling" />
      </LabelEL>
      <ButtonEL type="submit">Submit</ButtonEL>
    </FormEL>
  );
}

export default Form;
