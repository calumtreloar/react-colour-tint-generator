import { useState } from "react";
import Values from "values.js";

const Form = ({ addColour }) => {
  const [colour, setColour] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addColour(colour);
  };

  return (
    <section className="container">
      <h4>Colour Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" name="colour" id="colour" value={colour} onChange={e => setColour(e.target.value)} />
        <label htmlFor="colourText"></label>
        <input
          type="text"
          name="colourText"
          id="colourText"
          onChange={e => setColour(e.target.value)}
          value={colour}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: colour }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
