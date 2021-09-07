import React, { Component } from 'react';
import { SliderItems } from './SliderItems';

class Slider extends React.Component {

    render() {
        return(
            <div id="carouselExampleInterval" className="carousel slide slider" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <ul>
                        {SliderItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="carousel-item active " data-bs-interval="4000">
                                        <img src={item.src} className="d-block w-100" alt={item.alt}/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon prev-img" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
                <span className="carousel-control-next-icon next-img" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
                </button>        

            </div>
        )
    }
}

export default Slider