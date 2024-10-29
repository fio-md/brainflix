import "./VideoUpload.scss";
import Button from "../../components/Button/Button";
import publishButton from "../../assets/images/icons/publish.svg";

const VideoUpload = () => {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form action="submit" className="upload__form">
        <div className="upload__form-container">
          <label htmlFor="thumbnail" className="upload__label">
            Video Thumbnail
          </label>
          <img src="" alt="" className="upload__thumbnail" />
        </div>
        <div className="upload__form-container">
          <label htmlFor="title" className="upload__label">
            Title your video
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="upload__form-title"
            placeholder="Add a title to your video"
          />
        </div>
        <div className="upload__form-container">
          <label htmlFor="description" className="upload__label">
            Add a Video Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            className="upload__input"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
        <Button buttonIcon={publishButton} buttonText="Publish" />
      </form>
    </section>
  );
};

export default VideoUpload;
