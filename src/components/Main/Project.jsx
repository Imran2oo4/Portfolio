import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&h=400&fit=crop&crop=center"
                            alt='Gesture-Based Game Controller'
                        />
                        <div className="content">
                            <h3>Gesture-Based Game Controller</h3>
                            <p>
                                Developed an innovative machine learning application that enables hands-free gaming through computer vision. The system uses real-time gesture recognition to translate hand movements into game controls, providing an interactive educational experience for understanding AI and computer vision concepts.
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> OpenCV
                                <span> -</span> TensorFlow
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                            alt='Professional Finance Tracker'
                        />
                        <div className="content">
                            <h3>Professional Finance Tracker</h3>
                            <p>
                                Created a comprehensive web-based financial management system that helps users track expenses, manage budgets, and analyze spending patterns. Features include interactive charts, category-wise expense breakdown, budget alerts, and financial goal tracking with a responsive design for desktop and mobile use.
                            </p>
                            <p className="tecnologias">
                                JavaScript
                                <span> -</span> HTML5
                                <span> -</span> CSS3
                                <span> -</span> Bootstrap
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center"
                            alt='Air Quality Monitoring System'
                        />
                        <div className="content">
                            <h3>Air Quality Monitoring System</h3>
                            <p>
                                Designed and implemented an IoT-based environmental monitoring solution that measures air quality parameters including PM2.5, CO2, temperature, and humidity. The system provides real-time data visualization, alerts for dangerous pollution levels, and historical data analysis for environmental research and public health awareness.
                            </p>
                            <p className="tecnologias">
                                Arduino
                                <span> -</span> C++
                                <span> -</span> Python
                                <span> -</span> Raspberry Pi
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
                            alt='Modern E-commerce Platform'
                        />
                        <div className="content">
                            <h3>Modern E-commerce Platform</h3>
                            <p>
                                Designed a comprehensive UI/UX solution for a modern e-commerce platform using Figma. Created user-centered wireframes, interactive prototypes, and high-fidelity mockups focusing on intuitive user experience, clean aesthetics, and responsive design principles. The design includes user journey mapping, product catalog layouts, checkout flow optimization, and mobile-first approach.
                            </p>
                            <p className="tecnologias">
                                Figma
                                <span> -</span> React
                                <span> -</span> JavaScript
                                <span> -</span> CSS3
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};
export default React.memo(Project);