import React, { Component } from 'react'
import Axios from 'axios';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: {},
            categoryDetails: {}
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:3001/products/' + this.props.match.params.id)
            .then((response) => {
                // handle success                
                this.setState({ productDetails: response.data });
                this.getCategoryDetails(response.data.categoryId);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    getCategoryDetails = (categoryId) => {
        Axios.get('http://localhost:3001/categories/' + categoryId)
            .then((response) => {
                // handle success
                this.setState({ categoryDetails: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        let {image, productName, description} = this.state.productDetails;
        return (
            <div id="productDetails" className="container">
                <h2>Product Details Page</h2>
                <hr/>
                <div className="row">
                    <div className="col-4">
                        <img className="card-img-top" src={image} alt={productName} />
                    </div>
                    <div className="col-4">
                        <p>Category: {this.state.categoryDetails.name}</p>
                        <p>Product Name: {productName}</p>
                        <p>Product Description: {description} </p>
                    </div>
                </div>
            </div>
        )
    }
}