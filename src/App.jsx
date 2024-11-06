import "./App.scss";
import Header from "./components/Header/Header";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useState, useEffect } from "react";
import * as API from "./utils/apiCalls";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    const vidArray = await API.getAllVideos();
    setVideos(vidArray);
  }

  if (!videos.length) {
    return <span className="loading">Loading data...</span>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoDetails videos={videos} />}></Route>
        <Route path="video/:videoId" element={<VideoDetails videos={videos} />}></Route>
        <Route path="upload" element={<VideoUpload fetchVideos={fetchVideos} />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
