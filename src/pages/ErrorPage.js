//sheik
import React from 'react';
import Banner from '../components/Banner';
import BgBanner from '../components/BgBanner';
import {Link} from 'react-router-dom';
import Footer from '../components/PageFooter';

export const ErrorPage = () => {
    return (
        <div>
            <Banner>
            <BgBanner title="404 Error" subtitle = "Page Not found">
                <Link to='/' className="btn-primary">Home</Link>
            </BgBanner>
            </Banner>
            <Footer/>
        </div>
    )
}

export default ErrorPage;