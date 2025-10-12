import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Esteban Nahuel Carrizo, a student at the Technological University of Tucumán; I consider myself a person passionate about programming and web development since in 2020 I had the opportunity to get to know this world of the front-end and I was able to create my first web page only using HTML and CSS from there, I felt a great passion for web development, since you can do amazing things knowing how to use HTML, CSS, JavaScript and to this day I still feel that same passion when I create a web page."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I have experience working as a freelance web designer and developer, which gave me the opportunity to work on many interesting projects, adapting to the client's needs and budget, which allowed me to improve my skills and knowledge; Additionally, I have also had the opportunity to be part of some online and face-to-face courses that helped me enrich my skills and learn a little more about this beautiful world of web development."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Python" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" title="Python" />
                <h2 className="skill-name">Python</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='Proficient in Python for AI/ML development, automation, and backend solutions. Used extensively in computer vision projects and data processing applications.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='Strong foundation in CSS for responsive web design and modern UI implementations. Combined with frameworks like Bootstrap for enhanced styling.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="JavaScript" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="JavaScript" />
                <h2 className="skill-name">JavaScript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='Experienced in JavaScript for frontend development, interactive web applications, and automation workflows. Essential for React and Angular projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Java" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" />
                <h2 className="skill-name">Java</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='Skilled in Java programming with object-oriented design principles. Completed masterclass certification and applied in various development projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="React" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
                <h2 className="skill-name">React</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='Proficient in React framework for building dynamic, component-based web applications with modern JavaScript ES6+ features and state management.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Angular" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" title="Angular" />
                <h2 className="skill-name">Angular</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='Experienced with Angular framework for developing scalable web applications with TypeScript, component architecture, and enterprise-level solutions.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="C" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" title="C" />
                <h2 className="skill-name">C</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='Knowledgeable in C programming for embedded systems development, Arduino projects, and low-level hardware-software integration solutions.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="SQL" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" title="SQL" />
                <h2 className="skill-name">SQL</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='Proficient in SQL for database management, data analysis, and backend development. Essential for data-driven application development.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="AI/ML" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" title="TensorFlow" />
                <h2 className="skill-name">AI/ML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='Experienced with TensorFlow and OpenCV for machine learning model development, computer vision applications, and AI solution implementation.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Canva" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" title="Canva" />
                <h2 className="skill-name">Canva</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-10'
                    defaultMessage='Proficient in Canva for creating professional graphics, social media content, presentations, and visual design elements for web and marketing materials.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="n8n" className="skills-img" src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" title="n8n" />
                <h2 className="skill-name">n8n</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-11'
                    defaultMessage='Experienced with n8n for workflow automation, API integrations, and creating efficient business process automation solutions with visual workflow builder.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;