import "./ActiveVideo.scss";

const ActiveVideo = ({ activeVideo }) => {
  return <main className="main">{activeVideo.title}</main>;
};

export default ActiveVideo;
