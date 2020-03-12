//sheik
import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from "../components/Loading";
import Property from "../components/Property";
import Title from "../components/Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const {loading, featuredRooms:propertyList} = this.context;
        const properties = propertyList.map(singleProp => {
            return <Property key={singleProp.id} singleProp={singleProp}/>
        })
        return ( 
            <section className= "featured-rooms">
                <Title title="Featured Properties"/> 
                <div className="featured-rooms-center">
                    {loading?<Loading/> : properties}
                </div>
            </section>

        )
    }
}
