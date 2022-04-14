import React from 'react';
import './ShoppingAbout.css'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const ShoppingAbout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='container about-above'>
                <h1 className='about-us mb-5'>About-US</h1>
                <div className='row'>
                    <div className="col-lg-6">

                        <h6 className='about-part'>Industrialization is a major reason for the economic development of a country. It plays a significant role in transforming the monetary structure of developing nations. Textile industry of Bangladesh is more than 500 years old. It is one of the oldest and most successful industries with its rich history. Moreover, in recent years there has been a substantial development in yarn and fabric production.</h6>
                        <h6 className='about-part'>


                            The textile and clothing industries provide a single source of growth in Bangladesh's rapidly developing economy.Exports of textiles and garments are the principal source of foreign exchange earnings. By 2002 exports of textiles, clothing, and ready-made garments (RMG) accounted for 77% of Bangladesh's total merchandise exports</h6>

                    </div>
                    <div className="col-lg-6">
                        <div className='data-img'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9I1bidhCSsooAdPjV-Y268vaaupivPrvzA&usqp=CAU" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaySbHbI3zewnqeI7wJjrtEoMlopo0MY_yCg&usqp=CAU" alt="" />
                         
                        </div>

                        <div className='data-img'>
                          <img src="https://static01.nyt.com/images/2021/05/29/business/28BangladeshAccord1-print/28BangladeshAccord-1-facebookJumbo.jpg" alt="" />
                            <img src="https://d30fl32nd2baj9.cloudfront.net/media/2020/05/28/bangladesh-garments-280520-01.jpg/ALTERNATES/w640/bangladesh-garments-280520-01.jpg" alt="" />
                          </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default ShoppingAbout;