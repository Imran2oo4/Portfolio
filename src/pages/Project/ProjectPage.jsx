import React from 'react'
import './ProjectPage.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Project = () => {

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <img className="projects__img" src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&h=400&fit=crop&crop=center" alt="Gesture-Based Game Controller" />
            <div className="projects__info">
              <h3>Gesture-Based Game Controller</h3>
              <p>Gesture Recognition Learning App - Interactive machine learning educational tool.</p>
              <p>Built with Python and TensorFlow to teach gesture recognition concepts. Features real-time camera input, model training visualization, and accuracy metrics for learning AI/ML fundamentals.</p>
              <div className="projects__tech">
                <span>Used technology:</span>
                <div className="tech-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects__item">
            <img className="projects__img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center" alt="Professional Finance Tracker" />
            <div className="projects__info">
              <h3>Professional Finance Tracker</h3>
              <p>Comprehensive finance tracking web application for personal and business financial management.</p>
              <p>Features expense tracking, budget planning, financial analytics, and reporting dashboard. Built with modern web technologies for responsive design and real-time data visualization.</p>
              <div className="projects__tech">
                <span>Used technology:</span>
                <div className="tech-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects__item">
            <img className="projects__img" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center" alt="Air Quality Monitoring System" />
            <div className="projects__info">
              <h3>Air Quality Monitoring System</h3>
              <p>IoT-based environmental monitoring system for real-time air quality assessment.</p>
              <p>Integrated sensor network monitors pollutants, temperature, and humidity. Features data logging, alert systems, and wireless connectivity for environmental health tracking and analysis.</p>
              <div className="projects__tech">
                <span>Used technology:</span>
                <div className="tech-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects__item">
            <img className="projects__img" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center" alt="Modern E-commerce Platform" />
            <div className="projects__info">
              <h3>Modern E-commerce Platform</h3>
              <p>Complete UI/UX design and development of a modern e-commerce platform for fashion retail.</p>
              <p>Features responsive design, intuitive product browsing, advanced filtering, shopping cart functionality, secure checkout process, and mobile-first approach. Designed with user-centered design principles and modern aesthetic appeal.</p>
              <div className="projects__tech">
                <span>Used technology:</span>
                <div className="tech-icons">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Project;