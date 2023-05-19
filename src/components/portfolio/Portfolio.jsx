import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/easy-light.png";
import IMG2 from "../../assets/autentik.png";
import IMG3 from "../../assets/lupita-hvac.png";
import IMG4 from "../../assets/arzet-home.png";
import IMG5 from "../../assets/claudineco.png";
import IMG6 from "../../assets/bomba-portfolio.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Easy Light",
    // github: "https://github.com/mcgidoug/beatmaker",
    demo: "https://easy-light.ch/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Autentik",
    // github: "https://github.com/mcgidoug/color-palette-chooser",
    demo: "https://autentik.ch/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lupita's HVAC",
    // github: "https://github.com/mcgidoug/mern-book-store",
    demo: "https://lupitas-hvac.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Arzet Home",
    // github: "https://github.com/mcgidoug/mern-goal-saver",
    demo: "https://arzethomeimprovement.com/index.html",
  },
  {
    id: 5,
    image: IMG5,
    title: "Claudine CO",
    // github: "https://github.com/mcgidoug/mern-goal-saver",
    demo: "https://fascinating-jalebi-848979.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Bomba Portfolio",
    // github: "https://github.com/mcgidoug/mern-goal-saver",
    demo: "https://josh-bomba.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
