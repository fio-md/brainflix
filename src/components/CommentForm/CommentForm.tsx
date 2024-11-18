import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import commentIcon from "/src/assets/images/icons/add_comment.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";
import { useState } from "react";
import * as API from "../../utils/apiCalls";
import "./CommentForm.scss";
import { VideoDetail, PostComment, CommentInput } from "../../utils/interfaces";

const CommentForm = ({
  currentVideo,
  fetchVideos,
}: {
  currentVideo: VideoDetail;
  fetchVideos: Function;
}) => {
  const [comment, setComment] = useState<string>("");

  const postMyComment = async (commentObj: CommentInput) => {
    const result: PostComment = await API.postComment({
      id: currentVideo.id,
      comment: commentObj,
    });
    fetchVideos();
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const commentObj: CommentInput = { name: "Fiorella", comment };
    setComment("");
    postMyComment(commentObj);
  };

  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
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
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>
        <Button buttonIcon={commentIcon} buttonText="comment" />
      </div>
    </form>
  );
};

export default CommentForm;
