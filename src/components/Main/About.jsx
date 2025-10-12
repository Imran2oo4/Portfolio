import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Mohamed Imran and I am a Software Development Engineer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='B.E. Electronics & Communication Engineering student with a strong passion for software development and AI/ML technologies. Proficient in real-time hardware–software integration, IoT solutions, computer vision, web development, and workflow automation. Adaptable and quick learner, seeking opportunities to deliver innovative, efficient, and technology-driven solutions.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            21
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Programming, IoT Projects and Technology Innovation
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> mdimran4511a@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Chennai, India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Frontend & Web Development</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Angular" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                        <h5>Angular</h5>
                    </div>
                    <div>
                        <img alt="Typescript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>TypeScript</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                </div>
                <h4>Programming & AI/ML</h4>
                <div className="skill">
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="Java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="C" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                        <h5>C</h5>
                    </div>
                    <div>
                        <img alt="TensorFlow" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
                        <h5>TensorFlow</h5>
                    </div>
                    <div>
                        <img alt="OpenCV" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" />
                        <h5>OpenCV</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>SQL</h5>
                    </div>
                </div>
                <h4>IoT & Tools</h4>
                <div className="skill">
                    <div>
                        <img alt="Arduino" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
                        <h5>Arduino</h5>
                    </div>
                    <div>
                        <img alt="Raspberry Pi" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" />
                        <h5>Raspberry Pi</h5>
                    </div>
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="Canva" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" title="Canva" />
                        <h5>Canva</h5>
                    </div>
                    <div>
                        <img alt="n8n" className="icons-skils" src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" title="n8n" />
                        <h5>n8n</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);