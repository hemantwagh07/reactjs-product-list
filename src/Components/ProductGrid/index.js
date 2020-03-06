import React from 'react'

export default function ProductGrid(props) {
    return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={props.productImage} alt={props.productName} />
                    <div className="card-body">
                        <h5 className="card-title">{props.productName}</h5>
                    </div>
                </div>
            </div>
    )
}
