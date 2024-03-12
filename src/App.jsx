import { useState } from "react";
import Values from "values.js";
import ColourList from "./components/ColourList";
import Form from "./components/Form";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colours, setColours] = useState(new Values("#f15025").all(10));

  // toast.success("awesome");
  // toast.error("error message");

  const addColour = colour => {
    try {
      setColours(new Values(colour).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColour={addColour} />
      <ColourList colours={colours} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
