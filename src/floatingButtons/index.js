import clsx from "clsx";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import "./index.styles.css";

export const FloatingButtons = () => {
  return (
    <div className="floatingButtonWrapper">
      <TwitterFloatingButton />
      <FacebookFloatingButton />
      <InstagramFloatingButton />
      <YoutubeFloatingButton />
    </div>
  );
};

const TwitterFloatingButton = () => {
  return (
    <div className={clsx("fab", "twitterButton")}>
      <AiOutlineTwitter className="fabIcons" />
    </div>
  );
};

const FacebookFloatingButton = () => {
  return (
    <div className={clsx("fab", "facebookButton")}>
      <CgFacebook className="fabIcons" />
    </div>
  );
};

const InstagramFloatingButton = () => {
  return (
    <div className={clsx("fab", "instagramButton")}>
      <AiOutlineInstagram className="fabIcons" />
    </div>
  );
};

const YoutubeFloatingButton = () => {
  return (
    <div className={clsx("fab", "youtubeButton")}>
      <AiOutlineYoutube className="fabIcons" />
    </div>
  );
};
