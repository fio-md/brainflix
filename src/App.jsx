import "./App.scss";
import Header from "./components/Header/Header";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";
import NextVideos from "./components/NextVideos/NextVideos";
import videoData from "/src/data/video-details.json";
import { useState } from "react";

function App() {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  const [otherVideos, setOtherVideos] = useState(
    videoData.filter((video) => video !== videoData[0])
  );
  return (
    <>
      <Header />
      <main className="main">
        <video className="main__video" controls poster={activeVideo.image}></video>
        <div className="main__container">
          <ActiveVideo activeVideo={activeVideo} />
          <NextVideos otherVideos={otherVideos} />
        </div>
      </main>
    </>
  );
}

export default App;
