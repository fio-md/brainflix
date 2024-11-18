import "./NextVideos.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";
import Divider from "../Divider/Divider";
import { Video } from "../../utils/interfaces";

const NextVideos = ({ nextVideos }: { nextVideos: Video[] }) => {
  return (
    <>
      <Divider newClass="desktop-only" />
      <section className="next">
        <h3 className="next__title">Next Videos</h3>
        <ul className="next__list">
          {nextVideos.map((video) => (
            <NextVideoItem key={video.id} video={video} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default NextVideos;
