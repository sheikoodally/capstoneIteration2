 import React from 'react';
import PropertyFilter from './PropertyFilter';
import PropertyList from './PropertyList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading';

function PropertyContainer({context}) {

    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading/>;
    }            
    return (
        <>
            <PropertyFilter properties={rooms}/>
            <PropertyList properties={sortedRooms}/>
        </>
    )

}

export default withRoomConsumer(PropertyContainer);  

/* import React from 'react';
import PropertyFilter from './PropertyFilter';
import PropertyList from "./PropertyList";
import { RoomConsumer } from '../Context';
import Loading from './Loading';

export default function PropertyContainer() {
    return (
        <RoomConsumer>
            {value => {
                return (
                    <div>
                        hello
                        <PropertyFilter/>
                        <PropertyList/>
                    </div>
                )
            }
            }
        </RoomConsumer>


    )
} */

