import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductDetails(props) {
    console.log(props.match.params.id);
    
    return (
        <div className="row">
            <div className="col-sm-3">
                Image will go here
            </div>
            <div className="col-sm-9">
                Other details
            </div>
        </div>
    )
}

export default withRouter(ProductDetails);