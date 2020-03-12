//sheik
import React, { Component } from 'react';
import {FaCocktail, FaWifi, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    
    state = {
        services: [

            {
                icon: <FaWifi/>,
                title:"free Wifi",
                info: "lorem lorem lorem imspn dolor sit lorem lorem lorem imspn dolor sit",
            },
            {
                icon: <FaShuttleVan/>,
                title:"free shuttle vans",
                info: "lorem lorem lorem imspn dolor sit lorem lorem lorem imspn dolor sit",
            },
            {
                icon: <FaBeer/>,
                title:"free Beers",
                info: "lorem lorem lorem imspn dolor sit lorem lorem lorem imspn dolor sit",
            }
        ]
    }
    
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
