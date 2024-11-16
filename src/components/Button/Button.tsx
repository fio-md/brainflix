import "./Button.scss";

const Button = ({
  buttonIcon,
  buttonText,
}: {
  buttonIcon: string;
  buttonText: string;
}) => {
  return (
    <button className="button">
      <img src={buttonIcon} alt="" className="button__icon" />
      <span className="button__text">{buttonText}</span>
    </button>
  );
};

export default Button;
