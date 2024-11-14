import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ currentId, commentList, fetchVideoDetails }) => {
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
            fetchVideoDetails={fetchVideoDetails}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
