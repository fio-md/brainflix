import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ currentId, commentList, deleteComment }) => {
  const sortedComments = commentList.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <ul className="comments__list">
      {sortedComments.map((comment) => {
        return (
          <CommentItem
            key={comment.id}
            comment={comment}
            timestamp={comment.timestamp}
            currentId={currentId}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
