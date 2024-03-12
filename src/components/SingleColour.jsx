import { toast } from "react-toastify";

const SingleColour = ({ colour, index }) => {
  const { hex, weight } = colour;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Colour copied successfully 😄");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Copy to clipboard not available");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColour;
