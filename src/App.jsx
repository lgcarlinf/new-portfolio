import { useContext, useEffect } from "react";
import "./scss/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemeContext from "./context/ThemeProvider";
import ScrollReveal from "scrollreveal";

function App() {
  const { theme } = useContext(ThemeContext);

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  useEffect(() => {
    sr.reveal(`.profile__border`);
    sr.reveal(`.change-theme`);
    sr.reveal(`.profile__name`, { delay: 500 });
    sr.reveal(`.profile__profession`, { delay: 600 });
    sr.reveal(`.profile__social`, { delay: 700 });
    sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
    sr.reveal(`.profile__buttons`, { delay: 800 });
    sr.reveal(`.filters__content`, { delay: 900 });
    sr.reveal(`.filters`, { delay: 1000 });
  }, []);

  return (
    <div className={`${theme === "dark" ? "dark-theme" : "light-theme"} App`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
