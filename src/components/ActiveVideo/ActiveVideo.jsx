import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import CommentItem from "../CommentItem/CommentItem";
import "./ActiveVideo.scss";
import commentIcon from "/src/assets/images/icons/add_comment.svg";

const ActiveVideo = ({ activeVideo }) => {
  return (
    <>
      <section className="info">
        <h1 className="info__title">{activeVideo.title}</h1>
        <div className="info__summary">
          <h4 className="info__channel">{`By ${activeVideo.channel}`}</h4>
          <span className="info__date">{activeVideo.timestamp}</span>
          <div className="info__views">{activeVideo.views}</div>
          <div className="info__likes">{activeVideo.likes}</div>
        </div>
        <p className="info__description">{activeVideo.description}</p>
      </section>
      <section className="comments">
        <form action="submit" className="form">
          <Avatar />
          <label htmlFor="comment" className="form__label">
            join the conversation
          </label>
          <textarea
            className="form__comment"
            name="comment"
            id="comment"
            placeholder="Add a new comment"
          ></textarea>
          <Button buttonIcon={commentIcon} buttonText="comment" />
        </form>
        <ul className="comments__list">
          {activeVideo.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default ActiveVideo;
