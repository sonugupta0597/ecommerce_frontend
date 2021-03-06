import React from 'react'
import Card_Grid from '../commonItems/Card_Grid'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function Carousel() {
    return (
        <div> 
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
                <div class="carousel-inner" style={{ height: '200px' }}>
                    <div class="carousel-item active ">

                        <Card_Grid />

                    </div>
                    <div class="carousel-item">
                    <Card_Grid />
                    </div>
                    <div class="carousel-item">
                    <Card_Grid />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <ChevronLeftIcon style={{color:'black',fontSize:'50px'}} />
                    
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls"  role="button" data-slide="next">
                    <ChevronRightIcon  style={{color:'black',fontSize:'50px'}}/>
                </a>
            </div>
        </div>
    )
}
