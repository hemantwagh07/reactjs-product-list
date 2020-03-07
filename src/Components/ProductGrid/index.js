import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductGrid(props) {
    return (
        props.productData.map((Product, index) => (
            <Link to={'/product/' + Product.id} key={index}>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={Product.image} alt={Product.productName} />
                        <div className="card-body">
                            <h5 className="card-title">{Product.productName}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    )
}