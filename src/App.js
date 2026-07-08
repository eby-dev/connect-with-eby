import "./App.css";
import ParticlesBg from "particles-bg";
import { useState, useRef, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsGithub, BsGitlab, BsGooglePlay } from "react-icons/bs";
import { FaLinkedinIn, FaGlobe, FaBriefcase, FaCode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Typist from "react-typist";
import TextLoop from "react-text-loop";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: " ✏️",
    hideWhenDone: true,
  };

  const [darkMode, setDarkMode] = useState(false);
  const card = useRef(null);

  function trackClick(linkName) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "link_click", { link_name: linkName });
    }
  }

  function toggle() {
    const next = !darkMode;
    setDarkMode(next);
    trackClick(next ? "Dark Mode On" : "Dark Mode Off");
  }

  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const check = () => {
      setIsScrollable(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = card.current;
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
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
              onClick={() => trackClick("LinkedIn")}
            >
              <div className="btn-social">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ahmadabuhasan.com"
              onClick={() => trackClick("Personal Website")}
            >
              <div className="btn-social">
                <FaGlobe />
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
              href="https://eby-dev.github.io"
              onClick={() => trackClick("Portfolio")}
            >
              <div className="btn-action">
                <FaBriefcase className="icon" />
                <span>Portfolio</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eby-dev"
              onClick={() => trackClick("GitHub")}
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
              onClick={() => trackClick("GitLab")}
            >
              <div className="btn-action">
                <BsGitlab className="icon" />
                <span>GitLab</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.dicoding.com/users/ahmadabuhasan"
              onClick={() => trackClick("Dicoding")}
            >
              <div className="btn-action">
                <FaCode className="icon" />
                <span>Dicoding</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/dev?id=6964311956052920659"
              onClick={() => trackClick("Play Store")}
            >
              <div className="btn-action">
                <BsGooglePlay className="icon" />
                <span>Play Store</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://g.dev/ahmadabuhasan"
              onClick={() => trackClick("Google Developer")}
            >
              <div className="btn-action">
                <FcGoogle className="icon" />
                <span>Google Developer</span>
              </div>
            </a>
          </div>
        </div>
        {isScrollable && (
          <div
            className="scroll-info"
            onClick={isAtBottom ? handleScrollTop : handleScrollDown}
          >
            <span className="scroll-text">
              {isAtBottom ? "Scroll Top" : "Scroll Down"}
            </span>
            {isAtBottom ? (
              <AiOutlineUp size={12} />
            ) : (
              <AiOutlineDown size={12} />
            )}
          </div>
        )}
      </div>

      <ParticlesBg type="random" bg={true} />
    </div>
  );
}

export default App;
