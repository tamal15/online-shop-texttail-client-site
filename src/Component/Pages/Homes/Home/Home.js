import React from 'react';
import ThreePieceProduct from '../../Dashboard/ThreePieceProduct/ThreePieceProduct';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
    return (
        <div className="keywords">
            <Navigation></Navigation>
            <Banner></Banner>
            <Service></Service>
            <AllProducts></AllProducts>
            <ThreePieceProduct></ThreePieceProduct>
            <Choose></Choose>
            <Footer></Footer>
        </div>
    );
};

export default Home;