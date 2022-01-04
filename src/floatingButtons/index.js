import clsx from "clsx";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdShare, MdClose } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import "./index.styles.css";
import { useState } from "react";

export const FloatingButtons = () => {
  const [fabState, setFabState] = useState(true);
  return (
    <div className="floatingButtonWrapper">
      <div
        className={clsx(
          fabState ? "fabSectionsWrapper" : "fabSectionsWrapperClosed"
        )}
      >
        <TwitterFloatingButton />
        <FacebookFloatingButton />
        <InstagramFloatingButton />
        {/* <YoutubeFloatingButton /> */}
      </div>

      <ContactButton
        fabState={fabState}
        onClick={() => setFabState((prevState) => !prevState)}
      />
    </div>
  );
};

const ContactButton = ({ onClick, fabState }) => {
  return (
    <div
      onClick={onClick}
      className={clsx("contactButton", fabState === false ? "open" : "")}
    >
      {fabState ? (
        <MdShare className="fabIcons" />
      ) : (
        <MdClose className="fabIcons" />
      )}
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
      href="https://www.instagram.com/simplyinvest_mf/"
    >
      <div className={clsx("fab", "instagramButton")}>
        <AiOutlineInstagram className="fabIcons" />
      </div>
    </a>
  );
};

// const YoutubeFloatingButton = () => {
//   return (
//     <a
//       rel="noreferrer"
//       target="_blank"
//       href="https://www.facebook.com/simplyinvest"
//     >
//       <div className={clsx("fab", "youtubeButton")}>
//         <AiOutlineYoutube className="fabIcons" />
//       </div>{" "}
//     </a>
//   );
// };
