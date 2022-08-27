import ImageCarousel from '../../components/ImageCarousel'
import './index.scss';
import { Component } from 'react';


const Home = () => {

    var imgArray = ["assets/images/models/model1.png"]
    return (
        <div className="container home">
            <div className="text-zone">
                <h1>Kyle Nierlich</h1>
                <p>Artist extraordiaire</p>
            </div>
            <div className='carouselContainer'>
                <ImageCarousel />
            </div>

        </div>

    );

}
export default Home;