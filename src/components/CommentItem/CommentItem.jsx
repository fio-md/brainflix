import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";
import Divider from "../Divider/Divider";
import deleteIcon from "../../assets/images/icons/delete.svg";
import { timeAgo } from "../../utils/utils";
import * as API from "../../utils/apiCalls";

const CommentItem = ({ currentId, comment, timestamp, fetchVideoDetails }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    API.deleteComment({ videoId: currentId, commentId: comment.id });
    fetchVideoDetails();
  };

  return (
    <>
      <li className="comment">
        <Avatar />
        <div className="comment__main">
          <div className="comment__top">
            <h4 className="comment__name">{comment.name}</h4>
            <span className="comment__timestamp">{timeAgo(timestamp)}</span>
          </div>
          <p className="comment__content">{comment.comment}</p>
          <div className="comment__bottom">
            {timestamp > 1731530130590 && (
              <button
                type="button"
                className="comment__delete-button"
                onClick={handleDelete}
              >
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  className="comment__delete-icon"
                />
              </button>
            )}
          </div>
        </div>
      </li>
      <Divider />
    </>
  );
};

export default CommentItem;
