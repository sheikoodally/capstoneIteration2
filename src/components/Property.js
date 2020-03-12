//sheik
import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import checkPropTypes from 'prop-types';

export default function Property({singleProp}) {
    const {name, slug, images, price, capacity, pets} = singleProp;
    const TrueCheck = "Allowed";
    const FalseCheck = "Not Allowed"; 
    return (
        
        <article className="room">
            <Link to={`/proplist/${slug}`}>
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single-room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/proplist/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            </Link>
            <p className="room-info">{name}<br/>
                <p className="additional-info">
                    Capacity: {capacity} {' '} People <br/>
                    Pets: {pets ? TrueCheck :  FalseCheck}<br/>
                    Pets: {pets ? TrueCheck :  FalseCheck}
                </p>
            </p>
            
        </article>
    )
}

Property.checkPropTypes = {
    Property:checkPropTypes.shape({
        name:checkPropTypes.string.isRequired,
        slug:checkPropTypes.string.isRequired,
        images: checkPropTypes.arrayOf(checkPropTypes.string).isRequired,
        price:checkPropTypes.string.isRequired,
        capacity:checkPropTypes.string.isRequired,
        pets:checkPropTypes.bool.isRequired
    })

}
