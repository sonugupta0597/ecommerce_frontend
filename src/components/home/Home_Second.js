import React from 'react'

import Home_Second_Heading from './Home_Second_Heading'
import Home_Second_Section_MenuBar from './Home_Second_Section_MenuBar'
import Card_Grid from '../commonItems/Card_Grid'
import Load_More from '../commonItems/Load_More'

export default function Home_Second() {
    return (
        <div className="home_second container">
            <Home_Second_Heading/>
            <Home_Second_Section_MenuBar/>
            <Card_Grid/>
            <Load_More/>
        </div>
    )
}
