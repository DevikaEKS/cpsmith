import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper'; // Correct way to import modules
import cli from "../../Asset/testimonial-1.png.png";
import cli2 from "../../Asset/testimonial-2.png.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Cardswipe.css";

function Cardswipe() {
    return (
        <div className='container-fluid clientpart ' id='servicesitpage'>
            <h1 className='text-light text-center headingclient py-2 my-5'>What Client Say</h1>
            <div className='slider-container text-light'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='card1'>
                            <div className='d-flex my-4'>
                              <img src={cli} alt="Client Testimonial"/>
                              <div className='mx-3 my-3'>
                                <h3>Annie</h3>
                                <h5>USA</h5>
                              </div>
                            </div>
                            <div>
                              <p className='caroussselpara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna Lorem Ipsum is simply dummy text of the printing industry.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card1'>
                            <div className='d-flex my-4'>
                              <img src={cli2} alt="Client Testimonial"/>
                              <div className='mx-3 my-3'>
                                <h3>Jack</h3>
                                <h5>Russia</h5>
                              </div>
                            </div>
                            <div>
                              <p className='caroussselpara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna Lorem Ipsum is simply dummy text of the printing industry.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
}

export default Cardswipe;
