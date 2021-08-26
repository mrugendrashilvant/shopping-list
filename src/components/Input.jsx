import React from 'react'

export default function Input() {
    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <h3>Add to your List</h3>
                </div>
                <hr />
                <div className="row my-2">
                    <label className="fs-4 fw-light" htmlFor="title">Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="row my-2">
                    <label className="fs-4 fw-light" htmlFor="qty">Quantity</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="row my-2">
                    <label className="fs-4 fw-light" htmlFor="price">Price</label>
                    <input type="number" className="form-control" />
                </div>
                <hr />
                <div className="row my-4">
                    <button className="btn btn-lg btn-warning">Add</button>
                </div>
            </div>
        </div>
    )
}
