import "./VideoUpload.scss";
import Divider from "../../components/Divider/Divider";
import UploadForm from "../../components/UploadForm/UploadForm";

const VideoUpload = () => {
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <Divider newClass="mobile-hidden" />
        <UploadForm />
      </section>
    </>
  );
};

export default VideoUpload;
