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
    <a
      rel="noreferrer"
      target="_blank"
      href="https://twitter.com/SimplyInvest1"
    >
      <div className={clsx("fab", "twitterButton")}>
        <AiOutlineTwitter className="fabIcons" />
      </div>
    </a>
  );
};

const FacebookFloatingButton = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.facebook.com/simplyinvest"
    >
      <div className={clsx("fab", "facebookButton")}>
        <CgFacebook className="fabIcons" />
      </div>
    </a>
  );
};

const InstagramFloatingButton = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.facebook.com/simplyinvest"
    >
      <div className={clsx("fab", "instagramButton")}>
        <AiOutlineInstagram className="fabIcons" />
      </div>
    </a>
  );
};

const YoutubeFloatingButton = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.facebook.com/simplyinvest"
    >
      <div className={clsx("fab", "youtubeButton")}>
        <AiOutlineYoutube className="fabIcons" />
      </div>{" "}
    </a>
  );
};
