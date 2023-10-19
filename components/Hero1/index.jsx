import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroBg1 from '../../assets/img/home1/hero1.jpg';
import Link from 'next/link';

function Hero1() {
    return (
        <section className="hero-slide-wrapper hero-1">
            <Swiper className="hero-slider-active owl-carousel">
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover bg-black"
                        // style={{ backgroundImage: `url(${HeroBg1})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Latest Company News</h1>
                                        <Link href="" className="theme-btn">
                                            Feature Story{' '}
                                            <BsArrowRight style={{ marginLeft: '10px' }} />
                                        </Link>
                                        <Link href="/about" className="theme-btn black">
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover bg-black"
                        style={{ backgroundImage: `url(${HeroBg1})` }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-6">
                                    <div className="hero-contents">
                                        <h1>Global Automotive</h1>
                                        <a href="services.html" className="theme-btn">
                                            Our Services <i className="fal fa-long-arrow-right" />
                                        </a>
                                        <a href="about.html" className="theme-btn black">
                                            learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero1;
