import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navigation">
            <div className="logo">
                <h3 className="fw-light"><i className="bi bi-cart4"></i> ShopList</h3>
            </div>
            <div className="buttons">

                <Link to="/" className="mx-2 fs-5"><i className="bi bi-house"></i></Link>
                <Link to="/input" className="mx-2 fs-5"><span className="fs-6">Add to List</span> <i className="bi bi-plus-circle"></i></Link>
                <Link to="/lists" className="mx-2 fs-5"><span className="fs-6">Show List</span> <i className="bi bi-list-task"></i></Link>

            </div>
        </div>
    )
}
