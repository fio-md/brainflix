import "./Avatar.scss";

const Avatar = ({ picture }) => {
  return (
    <div className="avatar">
      {picture ? <img src={picture} alt="" className="avatar__picture" /> : ""}
    </div>
  );
};

export default Avatar;
