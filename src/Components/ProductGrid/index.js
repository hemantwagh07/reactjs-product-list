import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductGrid(props) {
    let { productData } = props;
    return (
        productData.map(({ id, image, productName }) => (
            <Link to={'/product/' + id} key={id}>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={image} alt={productName} />
                        <div className="card-body">
                            <h5 className="card-title">{productName}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    )
}