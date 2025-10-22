import "./App.css";
import ParticlesBg from "particles-bg";
import { useState, useRef } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  BsGithub,
  BsGitlab,
  BsGooglePlay,
  BsQrCodeScan,
  BsYoutube,
  BsSpotify,
  BsStackOverflow,
} from "react-icons/bs";
import {
  FaReact,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaBriefcase,
  FaCode,
  FaDev,
  FaCodepen,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImProfile } from "react-icons/im";
import {
  SiWakatime,
  SiReplit,
  SiHackerrank,
  SiLeetcode,
  SiHackerone,
  SiBugcrowd,
  SiGmail,
} from "react-icons/si";
import Typist from "react-typist";
import TextLoop from "react-text-loop";
//import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: " ✏️",
    hideWhenDone: true,
  };

  const [darkMode, setDarkMode] = useState(false);
  const card = useRef(null);

  function toggle() {
    setDarkMode(!darkMode);
  }

  const [isAtBottom, setIsAtBottom] = useState(false);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = card.current;

    if (scrollTop + clientHeight === scrollHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  }

  function handleScrollDown() {
    card.current.scrollTo({
      top: card.current.scrollHeight,
      behavior: "smooth",
    });
  }

  function handleScrollTop() {
    card.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // function comingSoon() {
  //   toast.info("Coming soon", {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Flip,
  //   });
  // }

  return (
    <div className="d-flex content-center">
      <div className={`card ${darkMode ? "dark-theme" : ""}`}>
        <div
          className={`toggle ${darkMode ? "light" : "dark"}`}
          onClick={() => toggle()}
        ></div>
        <div className={`bg-dark ${darkMode ? "active" : ""}`}></div>
        <div
          ref={card}
          onScroll={handleScroll}
          className="card-body custom-scrollbar"
        >
          <div>
            <img
              className="card-avatar"
              src="https://github.com/eby-dev.png"
              alt="avatar"
            />
          </div>

          <div className="card-title">
            <Typist startDelay={100} cursor={config_cursor}>
              𝓔𝓫𝔂 <br />
              <Typist.Delay
                ms={500}
                hideWhenDone={true}
                hideWhenDoneDelay={true}
              />
              <span className="subtitle">Mobile Developer</span>
              <br />
              <Typist.Delay
                ms={100}
                hideWhenDone={true}
                hideWhenDoneDelay={true}
              />
              <span className="subtitle">
                Software Engineer X Security Enthusiast
              </span>
            </Typist>
          </div>

          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/ahmadabuhasan"
            >
              <div className="btn-social">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/46eby"
            >
              <div className="btn-social">
                <FaTwitter />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jkt48.christy"
            >
              <div className="btn-social">
                <FaInstagram />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100001555488554"
            >
              <div className="btn-social">
                <FaFacebookF />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com">
              <div className="btn-social">
                <FaTiktok />
              </div>
            </a>
          </div>

          <div className="card-title">
            Familiar with{" "}
            <TextLoop interval={1000}>
              <span className="text-blue">Java</span>
              <span className="text-blue">Kotlin</span>
              <span className="text-blue">XML</span>
              <span className="text-blue">Jetpack Compose</span>
              <span className="text-blue">Dart</span>
              <span className="text-blue">Flutter</span>
            </TextLoop>
          </div>

          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bit.ly/CVAhmadAbuHasan"
            >
              <div className="btn-action">
                <ImProfile className="icon" />
                <span>Curriculum Vitae</span>
              </div>
            </a>

            <a
              target="_blank" 
              rel="noreferrer" 
              href="https://eby-dev.github.io" 
            >
              {/* <ToastContainer /> */}
              <div className="btn-action">
                <FaBriefcase className="icon" />
                <span>Portfolio</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eby-dev"
            >
              <div className="btn-action">
                <BsGithub className="icon" />
                <span>GitHub</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://gitlab.com/ahmadabuhasan"
            >
              <div className="btn-action">
                <BsGitlab className="icon" />
                <span>GitLab</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/dev?id=6964311956052920659"
            >
              <div className="btn-action">
                <BsGooglePlay className="icon" />
                <span>Play Store</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.ahmadabuhasan.qrbarcode"
            >
              <div className="btn-action">
                <BsQrCodeScan className="icon" />
                <span>App - QR Barcode</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.dicoding.com/users/ahmadabuhasan"
            >
              <div className="btn-action">
                <FaCode className="icon" />
                <span>Dicoding</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://g.dev/ahmadabuhasan"
            >
              <div className="btn-action">
                <FcGoogle className="icon" />
                <span>Google Developer</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://wakatime.com/@bbcd646f-1daf-4865-a20e-46d4c803e6f8"
            >
              <div className="btn-action">
                <SiWakatime className="icon" />
                <span>WakaTime</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@ahmadabuhasan118"
            >
              <div className="btn-action">
                <BsYoutube className="icon" />
                <span>YouTube</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/user/gr3y7pr12w9ol2dy2ccdb10e7"
            >
              <div className="btn-action">
                <BsSpotify className="icon" />
                <span>Spotify</span>
              </div>
            </a>

            <a target="_blank" rel="noreferrer" href="https://dev.to/eby_dev">
              <div className="btn-action">
                <FaDev className="icon" />
                <span>Dev</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/15691794"
            >
              <div className="btn-action">
                <BsStackOverflow className="icon" />
                <span>Stack Overflow</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://replit.com/@eby8zevin"
            >
              <div className="btn-action">
                <SiReplit className="icon" />
                <span>Replit</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/eby8zevin"
            >
              <div className="btn-action">
                <FaCodepen className="icon" />
                <span>CodePen</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.hackerrank.com/ahmadabuhasan"
            >
              <div className="btn-action">
                <SiHackerrank className="icon" />
                <span>HackerRank</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://leetcode.com/eby8zevin"
            >
              <div className="btn-action">
                <SiLeetcode className="icon" />
                <span>LeetCode</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://hackerone.com/j4ncuk3rs"
            >
              <div className="btn-action">
                <SiHackerone className="icon" />
                <span>HackerOne</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://bugcrowd.com/j4ncuk3rs"
            >
              <div className="btn-action">
                <SiBugcrowd className="icon" />
                <span>Bugcrowd</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ahmadabuhasan@mhs.stmik-yadika.ac.id"
            >
              <div className="btn-action">
                <SiGmail className="icon" />
                <span>Mail</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eby-dev/connect-with-eby"
            >
              <div className="btn-action">
                <FaReact className="icon" />
                <span>Source code this bio.link</span>
              </div>
            </a>
          </div>
        </div>
        <div
          className="scroll-info"
          onClick={isAtBottom ? handleScrollTop : handleScrollDown}
        >
          <span className="scroll-text">
            {isAtBottom ? "Scroll Top" : "Scroll Down"}
          </span>
          {isAtBottom ? <AiOutlineUp size={12} /> : <AiOutlineDown size={12} />}
        </div>
      </div>

      <ParticlesBg type="random" bg={true} />
    </div>
  );
}

export default App;
