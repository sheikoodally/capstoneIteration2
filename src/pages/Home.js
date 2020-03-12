//sheik
import React from 'react';
import Banner from '../components/Banner';
import BgBanner from '../components/BgBanner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Styled from '../components/StyleBanner';
import Footer from '../components/PageFooter';

export const Home = () => {
    return (
        <>
        <Banner>
            <BgBanner title="Rental Properties" subtitle = "Properties prices starting at $59.99/Night">
                <Link to='/proplist' className="btn-primary">Our Properties</Link>
            </BgBanner>
        </Banner>
        <FeaturedRooms/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Home;
