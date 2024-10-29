import "./NextVideos.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";

const NextVideos = ({ nextVideos }) => {
  return (
    <section className="next">
      <h3 className="next__title">Next Videos</h3>
      <ul className="next__list">
        {nextVideos.map((video) => (
          <NextVideoItem key={video.id} video={video} />
        ))}
      </ul>
    </section>
  );
};

export default NextVideos;
