import "./VideoInfo.scss";

const VideoInfo = ({ activeVideo, dynamicTimestamp }) => {
  return (
    <section className="info">
      <h1 className="info__title">{activeVideo.title}</h1>
      <div className="info__summary">
        <div className="info__summary-left">
          <h4 className="info__channel">{`By ${activeVideo.channel}`}</h4>
          <span className="info__date">{dynamicTimestamp}</span>
        </div>
        <div className="info__summary-right">
          <div className="info__views">{activeVideo.views}</div>
          <div className="info__likes">{activeVideo.likes}</div>
        </div>
      </div>
      <p className="info__description">{activeVideo.description}</p>
      <span className="info__comment-count">{activeVideo.comments.length} comments</span>
    </section>
  );
};

export default VideoInfo;
