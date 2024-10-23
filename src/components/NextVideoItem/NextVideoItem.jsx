import "./NextVideoItem.scss";

const NextVideoItem = ({ video }) => {
  return (
    <li className="next-video" key={video.id}>
      <img src={video.image} alt="" className="next-video__image" />
      <div className="next-video__container">
        <h4 className="next-video__title">{video.title}</h4>
        <h5 className="next-video__channel">{video.channel}</h5>
      </div>
    </li>
  );
};

export default NextVideoItem;
