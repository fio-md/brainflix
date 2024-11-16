import VideoInfo from "../VideoInfo/VideoInfo";
import "./ActiveVideo.scss";
import Divider from "../Divider/Divider";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

const ActiveVideo = ({ currentVideo, fetchVideos }) => {
  return (
    <div className="active-video">
      <VideoInfo
        currentVideo={currentVideo}
        timestamp={currentVideo.timestamp}
      />
      <CommentForm currentVideo={currentVideo} fetchVideos={fetchVideos} />
      <section className="comments">
        <Divider />
        <CommentList
          currentId={currentVideo.id}
          commentList={currentVideo.comments}
          fetchVideos={fetchVideos}
        />
      </section>
    </div>
  );
};

export default ActiveVideo;
