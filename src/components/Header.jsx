import React, { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";

const Header = () => {
  const { theme, handleClick } = useContext(ThemeContext);

  return (
    <header className="profile container">
      {theme === "dark" ? (
        <i className="ri-sun-line change-theme" onClick={handleClick}></i>
      ) : (
        <i className="ri-moon-line change-theme" onClick={handleClick}></i>
      )}

      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              <img
                src="./img/photo.jpeg"
                alt="profile"
                className="profile__img"
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
                <i className="ri-linkedin-box-line"></i>
              </a>
            </li>
           <li>
            <a
                href="https://github.com/lgcarlinf"
                target="_blank"
                className="profile__social-link"
                aria-label="Github"
              >
                <i className="ri-github-line"></i>
              </a>
           </li>
          </ul>
        </div>

        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number">1</h3>
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
            <i className="ri-download-line"></i>
          </a>
          <div className="profile__buttons-small">
            <a
              href="https://api.whatsapp.com/send?phone=51994266065&text=Hola ,necesito informacion"
              target="_blank"
              className="button button__small button__gray"
              aria-label="Whatsapp"
            >
              <i className="ri-whatsapp-line"></i>
            </a>
            <a
              href="https://m.me/Luiguuii"
              target="_blank"
              className="button button__small button__gray"
              aria-label="Messenger"
            >
              <i className="ri-messenger-line"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
