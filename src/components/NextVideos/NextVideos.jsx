import "./NextVideos.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";

const NextVideos = ({ otherVideos }) => {
  return (
    <section className="next">
      <h3 className="next__title">Next Videos</h3>
      <ul className="next__list">
        {otherVideos.map((video) => (
          <NextVideoItem video={video} />
        ))}
      </ul>
    </section>
  );
};

export default NextVideos;
