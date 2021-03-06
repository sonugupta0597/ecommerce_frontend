import React from 'react'
import { Link } from 'react-router-dom'
import CategoryItems from '../commonItems/CategoryItems'

export default function Home_Second_Section_MenuBar() {
    return (
        <div className="home_second_section_menubar" >
        <div>
            
            <CategoryItems/>
            
        </div>

        <div>
        <Link to="/Sports"  className="link" style={{textDecoration:"none"}}>
            Sports
            </Link>
        </div>

        <div>
        <Link to="/entertainment" className="link" style={{textDecoration:"none"}}>
            Entertainment
            </Link>
        </div>

        <div>
        <Link to="/technology" ClclassName="link" style={{textDecoration:"none"}}>
            Technology
            </Link>
        </div>

        <div>
        <Link to="/science"  className="link" style={{textDecoration:"none"}}>
            Science
            </Link>
        </div>

        <div>
        <Link to="/business" className="link" style={{textDecoration:"none"}}>
            Business
            </Link>
        </div>
    </div>
    )
}
