import styled from "styled-components";

function Form() {
  return (
    <form>
      <label>
        Your Trianig Date:
        <input type="date" />
      </label>
      <h2>Running</h2>
      <label>
        running duration:
        <input type="time" />
      </label>
      <label>
        Distance (KM):
        <input type="number" />
      </label>
      <label>
        Are you training in intervale?
        <input type="number" />
      </label>
      <h3>Pullups</h3>
      <label>
        Sets:
        <input type="number" />
      </label>
      <label>
        Reps:
        <input type="number" />
      </label>
      <h3>Pushups</h3>
      <label>
        Sets:
        <input type="number" />
      </label>
      <label>
        Reps:
        <input type="number" />
      </label>
      <h3>Squats</h3>
      <label>
        Sets:
        <input type="number" />
      </label>
      <label>
        Reps:
        <input type="number" />
      </label>
      <label>
        Feeling:
        <input type="number" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
