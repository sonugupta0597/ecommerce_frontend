import React from 'react'
import MenuBar from './MenuBar'
import NavBar from './NavBar'

export default function Header() {
    return (
        <div className="header container">
            <div>
            </div>
            <div>
            <NavBar />
                <h1 style={{color:'red'}}>i Shop</h1>
                <MenuBar />
            </div>
        </div>
    )
}
