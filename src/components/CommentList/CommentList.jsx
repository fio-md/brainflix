import CommentItem from "../CommentItem/CommentItem";

const CommentList = ({ currentId, commentList, fetchVideos }) => {
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
            fetchVideos={fetchVideos}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
