import "./portfolio.scss";

import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import React, { useState } from "react";

const Portfolio = () => {
  // Project Data
  const projects = [
    {
      title: "ToDo App",
      description:
        "Todo list App using vanilla JavaScript and browser local storage",
      images: [
        "/src/assets/images/todo.png",
        "/src/assets/images/todo.png",
        "/src/assets/images/todo.png",
      ],
      website: "https://marwanbz.github.io/Todo-app/",
      repo: "https://github.com/MarwanBz/Todo-app",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
    {
      title: "Landing Page",
      description: "Split landing page for different brands",
      images: ["/src/assets/images/project-2.png", "/src/assets/images/planty.png"],
      website: "#",
      repo: "#",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
    {
      title: "Planty Website",
      description: "Planty website for fresh food",
      images: [
        "/src/assets/images/planty.png",
        "/src/assets/images/planty.png",
      ],
      website: "https://marwanbz.github.io/Planty/",
      repo: "https://github.com/MarwanBz/Planty",
      technologies: [<FaHtml5 />, <FaCss3Alt />],
    },
  
  ];

  // Modal Logic
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (projectIndex) => {
    setActiveProject(projects[projectIndex]);
    setActiveImageIndex(0); // start with the first image
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  const nextImage = () => {
    if (activeProject && activeImageIndex < activeProject.images.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (activeProject && activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h1 className="section-title">Portfolio</h1>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item"
              onClick={() => openModal(index)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-icons">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-icon">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && activeProject && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <img
              src={activeProject.images[activeImageIndex]}
              alt={activeProject.title}
              className="modal-image"
            />
            <div className="carousel-controls">
              <button onClick={prevImage} disabled={activeImageIndex === 0}>
                &lt;
              </button>
              <button
                onClick={nextImage}
                disabled={activeImageIndex === activeProject.images.length - 1}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
