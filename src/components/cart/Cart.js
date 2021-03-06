import React from 'react'
import Footer from '../commonItems/Footer'
import Cart_Header from './Cart_Header'
import Detail_Section from './Detail_Section'
import Total_Price from './Total_Price'

export default function Cart() {
    return (
        <div>
            <Cart_Header/>
            <Detail_Section/>
            <Total_Price/>
            <Footer/>
        </div>
    )
}
