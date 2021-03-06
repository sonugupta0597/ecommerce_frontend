import React from 'react'
import { Link } from 'react-router-dom'
import CategoryItems from '../commonItems/CategoryItems'

export default function MenuBar() {
    return (
        <div className="blog-header" >
            <div>
            <CategoryItems/>
            
            </div>
            <div>
                <Link to="/store" className="link" style={{ textDecoration: "none" }}>
                    store
            </Link>
            </div>

            <div>
                <Link to="/cart" className="link" style={{ textDecoration: "none" }}>
                    cart
            </Link>
            </div>

            <div>

                <Link to="/cart" className="link" style={{ textDecoration: "none" }}>
                    cart
            </Link>

            </div>

            <div>
                <Link to="/science" className="link" style={{ textDecoration: "none" }}>
                    Science
            </Link>
            </div>

            <div>
                <Link to="/business" className="link" style={{ textDecoration: "none" }}>
                    Business
            </Link>
            </div>
        </div>
    )
}
