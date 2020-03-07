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
        let self = this;
        Axios.get('http://localhost:3001/products/' + this.props.match.params.id)
            .then(function (response) {
                // handle success                
                self.setState({ productDetails: response.data });
                self.getCategoryDetails(response.data.categoryId);
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
        let self = this;
        Axios.get('http://localhost:3001/categories/' + categoryId)
            .then(function (response) {
                // handle success
                self.setState({ categoryDetails: response.data });
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
        return (
            <div id="productDetails" className="container">
                <h2>Product Details Page</h2>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <img className="card-img-top" src={this.state.productDetails.image} alt={this.state.productDetails.productName} />
                    </div>
                    <div className="col-4">
                        <p>Category: {this.state.categoryDetails.name}</p>
                        <p>Product Name: {this.state.productDetails.productName}</p>
                        <p>Product Description: {this.state.productDetails.description} </p>
                    </div>
                </div>
            </div>
        )
    }
}