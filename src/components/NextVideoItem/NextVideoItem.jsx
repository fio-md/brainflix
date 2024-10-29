import "./NextVideoItem.scss";
import { Link } from "react-router-dom";

const NextVideoItem = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`}>
      <li className="next-video">
        <img src={video.image} alt="" className="next-video__image" />
        <div className="next-video__container">
          <h4 className="next-video__title">{video.title}</h4>
          <h5 className="next-video__channel">{video.channel}</h5>
        </div>
      </li>
    </Link>
  );
};

export default NextVideoItem;
