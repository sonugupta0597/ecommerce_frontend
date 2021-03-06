import React from 'react'
import Individual_Card_Section from './Individual_Card_Section'
import Right_First from './Right_First'
import Right_Second from './Right_Second'

export default function Individual_Right() {
    return (
        <div className="individual_right">
            <Right_First/>
            <Right_Second/>
            <Individual_Card_Section/>
        </div>
    )
}
