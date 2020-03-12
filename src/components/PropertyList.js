import React from 'react';
import Property from './Property';
import { RoomConsumer } from '../Context';

export default function PropertyList({properties}) {

    if(properties.length === 0){
        return (
            <div className="empty-search">
                <h3>No rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
               {
                    properties.map(item =>{
                       return <Property key={item.id} singleProp={item}/>;
                   })
               } 
            </div>
        </section>
    )
}
