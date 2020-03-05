import React, { Component } from 'react'
import Axios from 'axios';
import ProductGrid from '../ProductGrid';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
        }
    }
    componentDidMount() {
        let self = this;
        Axios.get('http://localhost:3001/categories')
            .then(function (response) {
                // handle success
                console.log('response', response.data);
                self.setState({ categories: response.data });
                self.getproducts('', response.data[0].id)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    getproducts = (ev, categoryId) => {
        let selectedCategory = null;
        if (categoryId !== undefined) {
            selectedCategory = categoryId;
        } else {
            selectedCategory = ev.target.value
        }
        console.log('categoryId', categoryId);
        let self = this;
        Axios.get('http://localhost:3001/products?categoryId=' + selectedCategory)
            .then(function (response) {
                // handle success
                console.log('products', response.data);
                self.setState({ products: response.data });
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
            <div className="container">
                <h1>Product Listing Page</h1>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" id="category" onChange={this.getproducts}>
                            {
                                this.state.categories.map((category, index) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <hr />
                <ProductGrid></ProductGrid>
            </div>
        )
    }
}
