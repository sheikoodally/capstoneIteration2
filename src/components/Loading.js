//sheik
import React from 'react';
import loadingGif from "../images/gifs/loading-gear.gif";

export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms data loading...</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}
