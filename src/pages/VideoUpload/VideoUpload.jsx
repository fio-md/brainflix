import "./VideoUpload.scss";
import Divider from "../../components/Divider/Divider";
import UploadForm from "../../components/UploadForm/UploadForm";

const VideoUpload = ({ fetchVideos }) => {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <Divider newClass="mobile-hidden" />
      <UploadForm fetchVideos={fetchVideos} />
    </section>
  );
};

export default VideoUpload;
