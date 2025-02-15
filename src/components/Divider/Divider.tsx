import "./Divider.scss";

const Divider = ({ newClass }: { newClass?: string }) => {
  return <hr className={"divider" + (newClass ? ` ${newClass}` : "")}></hr>;
};

export default Divider;
