import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ commentList, timeAgo }) => {
  const sortedComments = commentList.sort((a, b) => b.timestamp - a.timestamp);
  return (
    <ul className="comments__list">
      {sortedComments.map((comment) => {
        return (
          <CommentItem
            key={comment.id}
            comment={comment}
            dynamicTimestamp={timeAgo(comment.timestamp)}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
