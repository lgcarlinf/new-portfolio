import React, { useState } from "react";
import { projects } from "../utils/projects";
import { skillsBackend, skillsFrontend } from "../utils/skils";

const Main = () => {
  const [active, setActive] = useState(1);

  return (
    <main className="main">
      <section className="filters container">
        <div className="filters__content">
          <button
            className={`${
              active == 1 ? "filters__button-active" : ""
            } filters__button`}
            data-target="#projects"
            onClick={() => setActive(1)}
          >
            Projects
          </button>
          <button
            className={`${
              active == 2 ? "filters__button-active" : ""
            } filters__button`}
            onClick={() => setActive(2)}
          >
            Skills
          </button>
        </div>
        <div className="filters__sections">
          {active == 1 && (
            <>
              <div
                className="projects__content grid"
                data-caontent
                id="projects"
              >
                {projects.map(({ name, url, img }, i) => (
                  <article className="projects__card" key={i}>
                    <img src={img} alt="" className="projects__img" />
                    <div className="projects__modal">
                      <div>
                        <span className="projects__subtitle">Web</span>
                        <h3 className="projects__title">{name}</h3>
                        <a
                          href={url}
                          target="_blank"
                          className="projects__button button button__small"
                          aria-label="Project Link"
                        >
                          <i className="ri-link"></i>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
                <div className="projects__more">
                  <a href="https://github.com/lgcarlinf" target="_blank" aria-label="more projects">
                    More Projects
                  </a>
                </div>
              </div>
            </>
          )}

          {active == 2 && (
            <div className="skills__content grid" data-caontent id="skills">
              <div className="skills__area">
                <h3 className="skills__title">Frontend developer</h3>
                <div className="skills__box">
                  <div className="skills__group">
                    {skillsFrontend.map(({ name, level }, i) => (
                      <div className="skills__data" key={i}>
                        <i className="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 className="skills__name">{name}</h3>
                          <span className="skills__level">{level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="skills__area">
                <h3 className="skills__title">Backend developer</h3>
                <div className="skills__box">
                  <div className="skills__group">
                    {skillsBackend.map(({ name, level }, i) => (
                      <div className="skills__data" key={i}>
                        <i className="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 className="skills__name">{name}</h3>
                          <span className="skills__level">{level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
