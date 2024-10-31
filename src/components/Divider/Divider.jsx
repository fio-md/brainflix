import "./Divider.scss";

const Divider = ({ newClass }) => {
  return <hr className={"divider" + (newClass ? ` ${newClass}` : "")}></hr>;
};

export default Divider;
