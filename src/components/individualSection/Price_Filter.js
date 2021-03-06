import React from 'react'
import PriceSlider from './PriceSlider'

export default function Price_Filter() {
    return (
        <div className="price_filter">
            <h4 style={{textAlign:'left'}}>Price</h4>
            <h6><PriceSlider/></h6>
        </div>
    )
}
