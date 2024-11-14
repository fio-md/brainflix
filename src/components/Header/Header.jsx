import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import uploadIcon from "/src/assets/images/icons/upload.svg";
import avatarPic from "/src/assets/images/Mohan-muruge.jpg";
import searchIcon from "/src/assets/images/icons/search.svg";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo-container">
          <img
            src="/src/assets/images/BrainFlix-logo.svg"
            alt=""
            className="header__logo"
          />
        </Link>
        <form action="" className="searchbar">
          <input
            className="searchbar__input"
            name="search-input"
            type="search"
            placeholder="Search"
          ></input>
          <button className="searchbar__button">
            <img src={searchIcon} alt="search icon" className="searchbar__icon" />
          </button>
        </form>
        <Avatar picture={avatarPic} />
        <Link to="/upload" className="button">
          <img src={uploadIcon} alt="" className="button__icon" />
          <span className="button__text">Upload</span>
        </Link>
      </header>
      <Divider />
    </>
  );
};

export default Header;
