import "./App.scss";
import Header from "./components/Header/Header";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoDetails />}></Route>
        <Route path="video/:videoId" element={<VideoDetails />}></Route>
        <Route path="upload" element={<VideoUpload />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
