import React, { Component } from 'react';
import Banner from '../components/Banner';
import BgBanner from '../components/BgBanner';
import {Link} from 'react-router-dom';
import PropertyContainer from '../components/PropertyContainer';
import Footer from '../components/PageFooter';
const PropList = () => {
    return ( 
    <>
        <Banner banner = "roomsBanner">
            <BgBanner title = "Our Properties">
                <Link to='/' className="btn-primary">Return Home</Link>
            </BgBanner>
        </Banner>
        <br/>
        <PropertyContainer/>
        <Footer/>
    </>
    )
}

export default PropList;


