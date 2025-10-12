import React from 'react';
import '../../pages/About/AboutPage.css'

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Experience = () => {
    return (
        <section className="sobre-mi" id="experience">
            <h2 className="heading">
                <FormattedMessage
                    id='experience'
                    defaultMessage='Experience'
                />
            </h2>

            <div className="row container">
                <div className="columns" data-aos="fade-right" data-aos-delay="300">
                    <h2 className="titulo">
                        <FormattedMessage
                            id='experience-title'
                            defaultMessage='Professional Experience & Training'
                        />
                    </h2>
                    <h3 className="subtitulo">
                        <FormattedMessage
                            id='experience-subtitle'
                            defaultMessage='Building expertise through hands-on learning and industry programs'
                        />
                    </h3>
                </div>

                <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                    
                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>UI Developer Course</h3>
                            <span className="experience-date">July 21 – August 13, 2025</span>
                        </div>
                        <h4>Finishing School for Employability Program</h4>
                        <p className="experience-organization">
                            Organized by ICT Academy & Infosys Foundation, Agni College of Technology, Chennai
                        </p>
                        <p className="experience-grade">Grade: A</p>
                        <p className="experience-description">
                            Successfully completed an intensive UI Development Program focused on bridging academic learning with industry requirements. 
                            Acquired practical expertise in HTML5, CSS3, JavaScript, Bootstrap, Angular, React.js, TypeScript, Nebular, Responsive Web Design, 
                            and UI/UX best practices. Emerged as a skilled UI Developer through real-world front-end project development and professional soft-skill training.
                        </p>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Python Intern</h3>
                            <span className="experience-date">March 2024</span>
                        </div>
                        <h4>SystemTron EduTech</h4>
                        <p className="experience-description">
                            Successfully completed a 1-month internship in Python programming, gained hands-on experience in Python development. 
                            Improved code efficiency and readability through best practices and modular designs.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default React.memo(Experience);