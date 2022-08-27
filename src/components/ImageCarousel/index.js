import './index.scss'
import React from 'react';
import Carousel from 'better-react-carousel';
import model1 from '../../assets/images/models/model1.jpg'
import model2 from '../../assets/images/models/model2.png'
const ImageCarousel = () => {
    return (
        <div className='carousel'>
            <Carousel cols={1} rows={1} gap={10} loop="true" autoPlay="true">
                <Carousel.Item>
                    <img width="100%" src={model1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={model2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default ImageCarousel;