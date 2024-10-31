import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";
import Divider from "../Divider/Divider";
import deleteIcon from "../../assets/images/icons/delete.svg";

const CommentItem = ({ comment, dynamicTimestamp, deleteComment }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.id);
  };

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
          <div className="comment__bottom">
            <button
              type="button"
              className="comment__delete-button"
              onClick={handleDelete}
            >
              <img src={deleteIcon} alt="delete icon" className="comment__delete-icon" />
            </button>
          </div>
        </div>
      </li>
      <Divider />
    </>
  );
};

export default CommentItem;
