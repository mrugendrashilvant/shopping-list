import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navigation">
            <div className="logo">
                <h3 className="fw-light"><i class="bi bi-cart4"></i> ShopList</h3>
            </div>
            <div className="buttons">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/input"><li>Add to List</li></Link>
                    <Link to="/lists"><li>Show List</li></Link>
                </ul>
            </div>
        </div>
    )
}
