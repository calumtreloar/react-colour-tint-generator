import { nanoid } from "nanoid";
import SingleColour from "./SingleColour";

const ColourList = ({ colours }) => {
  return (
    <article className="colors">
      {colours.map((colour, index) => {
        return <SingleColour key={nanoid()} colour={colour} index={index} />;
      })}
    </article>
  );
};

export default ColourList;
