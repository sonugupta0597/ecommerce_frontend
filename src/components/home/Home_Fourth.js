import React from 'react'
import SimpleCard from '../commonItems/SimpleCard'
import Carousel from './Carousel'



export default function Home_Fourth() {
    return (

        <div className="container home_fourth " >
            <div >
                <SimpleCard />
            </div>
            <div className="row" style={{marginTop:'50px'}}>
                <h1 style={{marginLeft:'30%',width:'40%'}}>Featured Products</h1>
                <Carousel />

            </div>
        </div>
    )
}
