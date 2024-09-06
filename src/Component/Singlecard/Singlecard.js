
// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination } from 'swiper'; // Correct way to import modules
// // import model1 from "../../Asset/image 103.png";
// // import model2 from "../../Asset/image 102.png";
// // import model3 from "../../Asset/image 100.png";
// // import model4 from "../../Asset/image 101.png";
// // import model5 from "../../Asset/image 104.png";
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import "./Singlecard.css";

// // function Singlecard() {
// //     return (
// //         <div className='container' id='servicesitpage'>
// //             <h1 className='text-light text-center headingclient py-2 my-5'>What Client Say</h1>
// //             <div className='slider-container text-light'>
// //                 <Swiper
// //                     modules={[Navigation, Pagination]}
// //                     spaceBetween={10}
// //                     slidesPerView={1}
// //                     navigation
// //                     pagination={{ clickable: true }}
// //                     breakpoints={{
// //                         1024: {
// //                             slidesPerView: 1,
// //                             spaceBetween: 30,
// //                         },
// //                         600: {
// //                             slidesPerView: 1,
// //                             spaceBetween: 20,
// //                         },
// //                         320: {
// //                             slidesPerView: 1,
// //                             spaceBetween: 10,
// //                         },
// //                     }}
// //                 >
// //                     <SwiperSlide>
// //                         <div className='card'> 
// //                           <img src={model1} />
// //                         </div>
// //                     </SwiperSlide>
// //                     <SwiperSlide>
// //                         <div className='card'>
// //                         <img src={model2} />
                           
// //                         </div>
// //                     </SwiperSlide>
// //                     <SwiperSlide>
// //                         <div className='card'>
// //                         <img src={model3} />
                           
// //                         </div>
// //                     </SwiperSlide>
// //                     <SwiperSlide>
// //                         <div className='card'>
// //                         <img src={model4} />
                           
// //                         </div>
// //                     </SwiperSlide>
// //                     <SwiperSlide>
// //                         <div className='card'>
// //                         <img src={model5} />
                           
// //                         </div>
// //                     </SwiperSlide>
// //                     {/* Add more slides as needed */}
// //                 </Swiper>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Singlecard;



// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper'; // Correct way to import modules
// import model1 from "../../Asset/image 103.png";
// import model2 from "../../Asset/image 102.png";
// import model3 from "../../Asset/image 100.png";
// import model4 from "../../Asset/image 101.png";
// import model5 from "../../Asset/image 104.png";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import "./Singlecard.css";

// const images = [model1, model2, model3, model4, model5];

// function Singlecard() {
//     const [currentImage, setCurrentImage] = useState(images[0]);

//     return (
//         <div className='container mx-2 px-2' id='servicesitpage'>
//             <h1 className='text-dark text-center headingclient py-2 my-5'>What Client Say</h1>
//             <div className='row slider-container text-light'>
              
//                 <Swiper
//                     modules={[Navigation, Pagination]}
//                     spaceBetween={10}
//                     slidesPerView={1}
//                     navigation
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         1024: {
//                             slidesPerView: 1,
//                             spaceBetween: 30,
//                         },
//                         600: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         320: {
//                             slidesPerView: 1,
//                             spaceBetween: 10,
//                         },
//                     }}
//                 >
//                     {images.map((img, index) => (
//                         <SwiperSlide key={index}>
//                             <div className='card'>
//                                 <img src={img} alt={`Slide ${index}`} />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//             <div className='thumbnail-container'>
//                 {images.map((img, index) => (
//                     <div
//                         key={index}
//                         className='thumbnail'
//                         onClick={() => setCurrentImage(img)}
//                         style={{ cursor: 'pointer', border: img === currentImage ? '2px solid black' : 'none' }}
//                     >
//                         <img src={img} alt={`Thumbnail ${index}`} style={{ width: '50px', height: 'auto', }} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Singlecard;

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import model1 from "../../Asset/image 103.png";
import model2 from "../../Asset/image 102.png";
import model3 from "../../Asset/image 100.png";
import model4 from "../../Asset/image 101.png";
import model5 from "../../Asset/image 104.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Singlecard.css";

const images = [model1, model2, model3, model4, model5];

function Singlecard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <div className='container mx-2 px-2' id='servicesitpage'>
            <h1 className='text-dark text-center headingclient py-2 my-5'>What Client Say</h1>
            <div className='row slider-container text-light'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className='card'>
                                <img src={img} alt={`Slide ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='thumbnail-container'>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className='thumbnail'
                        onClick={() => handleThumbnailClick(index)}
                        style={{ cursor: 'pointer', border: index === currentIndex ? '2px solid black' : 'none' }}
                    >
                        <img src={img} alt={`Thumbnail ${index}`} style={{ width: '50px', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Singlecard;
