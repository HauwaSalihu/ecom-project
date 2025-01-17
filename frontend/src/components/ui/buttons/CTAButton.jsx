import "./CTAButton.css";

function CTAButton(props) {
  return (
    /* From Uiverse.io by Wendell47 */
    <button className="button">
      {props.buttonText}
      <div className="hoverEffect">
        <div></div>
      </div>
    </button>
  );
}

export default CTAButton;
