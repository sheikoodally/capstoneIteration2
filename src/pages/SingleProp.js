import React, { Component } from 'react';
import defaultImg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import BgBanner from '../components/BgBanner';
import { RoomContext } from '../Context';
import {Link} from 'react-router-dom';
import Footer from '../components/PageFooter';

export default class SingleProp extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg : defaultImg
        };

    }
    static contextType = RoomContext;
    render() {
        const { getProperty } = this.context;

        const room = getProperty(this.state.slug);
        if(!room){
            return(
                <div className="error">
                    <h3>No such room could be found</h3>
                    <Link to='/' className="btn-primary">Back to Home</Link>
                </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images, address} = room;
        return (
        <section><Banner banner = "singleRoomsBanner">
            <BgBanner title = {`${name} room`}>
            </BgBanner>
            </Banner>
            <img  src={images[0] || defaultImg} alt="single-room"/>
            <div className="single-room-info">
                <article className="desc">
                    <h3>Details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Info</h3>
                    <h6>Price: ${price}</h6>
                    <h6>size: {size} sqft</h6>
                    <h6>
                        Max Capacity: {" "}
                        {capacity > 1 ?  `${capacity} persons`: `${capacity} person`}
                    </h6>
                    <h6>{pets? "Pets allowed" : "pets not allowed"}</h6>
                </article>
            </div>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index) =>{
                        return <li key={index}> {item}</li>
                    })}
                </ul>
            </section>
            <section className="room-extras">
                <h6>Address</h6>
                <p>{address}</p>
            </section>
            <Footer/>
        </section>
        )
    }
}

