import React from 'react'
import Accessories from './Accessories'
import Brand from './Brand'
import Color from './Color'
import More from './More'
import Price_Filter from './Price_Filter'
import TreeView from '../commonItems/TreeView'

export default function Individual_Left() {
    return (
        <div className="individual_left">
            <TreeView/>
            <Price_Filter/>
            <Color/>
            <Brand/>
            <More/>
        </div>
    )
}
