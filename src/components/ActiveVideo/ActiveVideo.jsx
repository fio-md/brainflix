import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import CommentItem from "../CommentItem/CommentItem";
import VideoInfo from "../VideoInfo/VideoInfo";
import "./ActiveVideo.scss";
import commentIcon from "/src/assets/images/icons/add_comment.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";

const ActiveVideo = ({ currentVideo }) => {
  function timeAgo(timestamp) {
    const currentTime = Math.floor(Date.now() / 1000);
    const timestampSecs = timestamp / 1000;
    const secondsAgo = currentTime - timestampSecs;

    if (secondsAgo < 60) {
      return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
    } else if (secondsAgo < 3600) {
      const minutes = Math.floor(secondsAgo / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (secondsAgo < 86400) {
      const hours = Math.floor(secondsAgo / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (secondsAgo < 604800) {
      const days = Math.floor(secondsAgo / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (secondsAgo < 2419200) {
      const weeks = Math.floor(secondsAgo / 604800);
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else if (secondsAgo < 29030400) {
      const months = Math.floor(secondsAgo / 2419200);
      return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(secondsAgo / 29030400);
      return `over a year ago`;
    }
  }

  return (
    <div className="active-video">
      <VideoInfo
        currentVideo={currentVideo}
        dynamicTimestamp={timeAgo(currentVideo.timestamp)}
      />
      <section className="comments">
        <form action="submit" className="form">
          <Avatar picture={avatarPic} />
          <div className="form__main">
            <div className="form__input">
              <label htmlFor="comment" className="form__label">
                join the conversation
              </label>
              <textarea
                className="form__comment"
                name="comment"
                id="comment"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <Button buttonIcon={commentIcon} buttonText="comment" />
          </div>
        </form>
        <ul className="comments__list">
          {currentVideo.comments.map((comment) => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                dynamicTimestamp={timeAgo(comment.timestamp)}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ActiveVideo;
