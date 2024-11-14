import VideoInfo from "../VideoInfo/VideoInfo";
import "./ActiveVideo.scss";
import Divider from "../Divider/Divider";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

const ActiveVideo = ({ currentVideo, fetchVideoDetails }) => {
  return (
    <div className="active-video">
      <VideoInfo currentVideo={currentVideo} timestamp={currentVideo.timestamp} />
      <CommentForm currentVideo={currentVideo} fetchVideoDetails={fetchVideoDetails} />
      <section className="comments">
        <Divider />
        <CommentList
          currentId={currentVideo.id}
          commentList={currentVideo.comments}
          fetchVideoDetails={fetchVideoDetails}
        />
      </section>
    </div>
  );
};

export default ActiveVideo;
