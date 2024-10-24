import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import CommentItem from "../CommentItem/CommentItem";
import VideoInfo from "../VideoInfo/VideoInfo";
import "./ActiveVideo.scss";
import commentIcon from "/src/assets/images/icons/add_comment.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";

const ActiveVideo = ({ activeVideo }) => {
  return (
    <div className="active-video">
      <VideoInfo activeVideo={activeVideo} />
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
          {activeVideo.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default ActiveVideo;
