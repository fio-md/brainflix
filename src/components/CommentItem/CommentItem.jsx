import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";
import Divider from "../Divider/Divider";

const CommentItem = ({ comment, dynamicTimestamp }) => {
  return (
    <>
      <li className="comment">
        <Avatar />
        <div className="comment__main">
          <div className="comment__top">
            <h4 className="comment__name">{comment.name}</h4>
            <span className="comment__timestamp">{dynamicTimestamp}</span>
          </div>
          <p className="comment__content">{comment.comment}</p>
        </div>
      </li>
      <Divider />
    </>
  );
};

export default CommentItem;
