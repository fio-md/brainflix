import ActiveVideo from "../../components/ActiveVideo/ActiveVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import * as API from "../../utils/apiCalls";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./VideoDetails.scss";

const VideoDetails = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigate = useNavigate();
  let { videoId } = useParams();

  if (!videoId) {
    videoId = videos[0].id;
  }

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId, currentVideo]);

  const fetchVideoDetails = async () => {
    const vidDetails = await API.getOneVideo(videoId);
    if (!vidDetails) {
      alert(`No videos match the id ${videoId}`);
      navigate("/");
    }
    setCurrentVideo(vidDetails);
  };

  if (!currentVideo) {
    return <span className="loading">Loading video details...</span>;
  }

  const nextVideos = videos.filter((video) => video.id !== currentVideo.id);

  return (
    <>
      <main className="main">
        <div className="main__video-container">
          <video className="main__video" controls poster={currentVideo.image}></video>
        </div>
        <div className="main__container">
          <ActiveVideo
            currentVideo={currentVideo}
            fetchVideoDetails={fetchVideoDetails}
          />
          <NextVideos nextVideos={nextVideos} />
        </div>
      </main>
    </>
  );
};

export default VideoDetails;
