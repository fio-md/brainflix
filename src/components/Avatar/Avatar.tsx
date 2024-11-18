import "./Avatar.scss";

const Avatar = ({ picture }: { picture?: string }) => {
  return (
    <div className="avatar">
      {picture ? <img src={picture} alt="" className="avatar__picture" /> : ""}
    </div>
  );
};

export default Avatar;
