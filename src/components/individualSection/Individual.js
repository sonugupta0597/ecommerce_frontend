import React from 'react'
import Footer from '../commonItems/Footer'
import Individual_Header from './Individual_Header'
import Individual_Left from './Individual_Left'
import Individual_Right from './Individual_Right'

export default function Individual() {
    return (
        <div>
            <Individual_Header />
            <div className="container margin individual">
                <Individual_Left />
                <Individual_Right />
                
            </div>
            <Footer/>
        </div>
    )
}
