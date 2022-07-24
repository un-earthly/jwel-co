import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function HomeBanner() {
    return (
        <div>

            <Carousel autoPlay={true} showStatus={false} showThumbs={false}>
                <div>
                    <img
                        loading='lazy'
                        src="https://dummyimage.com/600x400/e3ebec/000" alt="" />
                </div>
                <div>
                    <img
                        loading='lazy'
                        src="https://dummyimage.com/600x400/eeebbb/000" alt="" />
                </div>
                <div>
                    <img
                        loading='lazy'
                        src="https://dummyimage.com/600x400/ccceee/000" alt="" />
                </div>
            </Carousel>

        </div>
    )
}
