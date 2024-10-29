import "./VideoInfo.scss";

const VideoInfo = ({ currentVideo, dynamicTimestamp }) => {
  return (
    <section className="info">
      <h1 className="info__title">{currentVideo.title}</h1>
      <div className="info__summary">
        <div className="info__summary-left">
          <h4 className="info__channel">{`By ${currentVideo.channel}`}</h4>
          <span className="info__date">{dynamicTimestamp}</span>
        </div>
        <div className="info__summary-right">
          <div className="info__views">{currentVideo.views}</div>
          <div className="info__likes">{currentVideo.likes}</div>
        </div>
      </div>
      <p className="info__description">{currentVideo.description}</p>
      <span className="info__comment-count">{currentVideo.comments.length} comments</span>
    </section>
  );
};

export default VideoInfo;
