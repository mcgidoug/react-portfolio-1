import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/drum-machine.jpg";
import IMG2 from "../../assets/person-typing-two-computers.jpg";
import IMG3 from "../../assets/phone-infront-computer-work.jpg";
import IMG4 from "../../assets/laptop-typing-wide.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Beatmaker",
    github: "https://github.com/mcgidoug/beatmaker",
    demo: "https://mcgidoug.github.io/beatmaker/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Net Reality",
    github: "https://github.com/syobonaction/netreality",
    demo: "https://netreality-cc559.firebaseapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Book Store",
    github: "https://github.com/mcgidoug/mern-book-store",
    demo: "https://mcgidoug.github.io/beatmaker/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Art Institute Planner",
    github: "https://github.com/NBFxSuccess/ArtInstituteProject",
    demo: "https://mcgidoug.github.io/beatmaker/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
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
