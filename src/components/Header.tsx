import { use } from "react";
import ThemeContext from "../context/ThemeProvider";
import Icon from "./Icon";

const Header = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <header className="profile container">
      {theme === "dark" ? (
        <button className="change-theme" onClick={toggleTheme} aria-label="Use light theme">
          <Icon name="sun" />
        </button>
      ) : (
        <button className="change-theme" onClick={toggleTheme} aria-label="Use dark theme">
          <Icon name="moon" />
        </button>
      )}

      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              <img
                src="./img/responsive/photo-240.webp"
                srcSet="./img/responsive/photo-120.webp 120w, ./img/responsive/photo-240.webp 240w"
                sizes="115px"
                alt="profile"
                className="profile__img"
                width="115"
                height="115"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <h2 className="profile__name">Luiggy Carlin</h2>
          <h3 className="profile__profession">Frontend Developer</h3>

          <ul className="profile__social">
            <li>
              <a
                href="https://www.linkedin.com/in/luiggycf/"
                target="_blank"
                className="profile__social-link"
                aria-label="Linkedin"
              >
                <Icon name="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lgcarlinf"
                target="_blank"
                className="profile__social-link"
                aria-label="Github"
              >
                <Icon name="github" />
              </a>
            </li>
          </ul>
        </div>

        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number">3</h3>
            <p className="profile__info-description">
              Years of <br /> work
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">+40</h3>
            <p className="profile__info-description">
              Completed <br /> projects
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">+60</h3>
            <p className="profile__info-description">
              Satisfied <br /> clients
            </p>
          </div>
        </div>
        <div className="profile__buttons">
          <a download="" href="./files/luiggycv.pdf" className="button" aria-label='curriculum vitae'>
            Download CV
            <Icon name="download" />
          </a>
          <div className="profile__buttons-small">
            <a
              href="https://api.whatsapp.com/send?phone=51994266065&text=Hola ,necesito informacion"
              target="_blank"
              className="button button__small button__gray"
              aria-label="Whatsapp"
            >
              <Icon name="whatsapp" />
            </a>
            <a
              href="https://m.me/Luiguuii"
              target="_blank"
              className="button button__small button__gray"
              aria-label="Messenger"
            >
              <Icon name="messenger" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
