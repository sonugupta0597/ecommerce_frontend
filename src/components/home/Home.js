import React from 'react'
import Footer from '../commonItems/Footer'
import Home_First from './Home_First'

import Home_Fourth from './Home_Fourth'
import Home_Second from './Home_Second'
import Home_Third from './Home_Third'


export default function Home() {
    return (
        <div>
            
            <Home_First/>
            
            <Home_Second />
            <Home_Third/>
            <Home_Fourth />
            
            <Footer />

        </div>
    )
}
