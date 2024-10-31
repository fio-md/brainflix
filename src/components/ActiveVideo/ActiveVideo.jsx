import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import VideoInfo from "../VideoInfo/VideoInfo";
import "./ActiveVideo.scss";
import * as API from "../../utils/apiCalls";
import commentIcon from "/src/assets/images/icons/add_comment.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";
import Divider from "../Divider/Divider";
import { useState } from "react";
import CommentList from "../CommentList/CommentList";

const ActiveVideo = ({ currentVideo, fetchVideoDetails }) => {
  const [comment, setComment] = useState("");

  function timeAgo(timestamp) {
    const currentTime = Math.floor(Date.now() / 1000);
    const timestampSecs = Math.floor(timestamp / 1000);
    const secondsAgo = currentTime - timestampSecs;

    if (secondsAgo < 10) {
      return "just now";
    } else if (secondsAgo < 60) {
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

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = { name: "Anonymous", comment };
    setComment("");
    postMyComment(commentObj);
  };

  const postMyComment = async (commentObj) => {
    const result = await API.postComment({ id: currentVideo.id, comment: commentObj });
    fetchVideoDetails();
  };

  const deleteComment = async (commentId) => {
    const result = await API.deleteComment({ videoId: currentVideo.id, commentId });
  };

  return (
    <div className="active-video">
      <VideoInfo
        currentVideo={currentVideo}
        dynamicTimestamp={timeAgo(currentVideo.timestamp)}
      />
      <section className="comments">
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
              ></textarea>
            </div>
            <Button buttonIcon={commentIcon} buttonText="comment" />
          </div>
        </form>
        <Divider />
        <CommentList
          commentList={currentVideo.comments}
          timeAgo={timeAgo}
          deleteComment={deleteComment}
        />
      </section>
    </div>
  );
};

export default ActiveVideo;
