import React, {Component} from "react";
import './App.css';
import ProductList from "./ProductList/ProductList";
import AddProductModal from "./AddProductModal/AddProductModal";

import {v4 as uuidv4} from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.onDeleteProduct = (id) => {
            this.setState({
                products: this.state.products.filter(product => product.id !== id)
            })
        }
        this.onAddProduct = ({category, name, color}) => {
            this.setState({
                products: [...this.state.products, {
                    id: uuidv4(),
                    category,
                    name,
                    color,
                }]
            })
        }
        this.onEditProduct = (product) => {
            this.setState({
                products: this.state.products.map(stateProduct => {
                    if (product.id === stateProduct.id) {
                        return product;
                    } else {
                        return stateProduct;
                    }
                })
            })
        }
        this.state = {
            categories: [
                {
                    id: 1,
                    name: 'phone'
                },
                {
                    id: 2,
                    name: 'notebook'
                },
                {
                    id: 3,
                    name: 'tv'
                },
            ],
            products: [{
                id: uuidv4(), category: 1, name: 'iPhone 11 Pro Max', color: 'Gold',
            }, {
                id: uuidv4(), category: 1, name: 'OnePlus 7 Pro', color: 'Miracle Blue',
            }, {
                id: uuidv4(), category: 1, name: 'Samsung Galaxy 21S', color: 'Black',
            }, {
                id: uuidv4(), category: 2, name: 'Asus FX553VE', color: 'Black',
            }, {
                id: uuidv4(), category: 2, name: 'Lenovo Legion', color: 'Sky Blue',
            }, {
                id: uuidv4(), category: 2, name: 'MacBook Air 2013', color: 'Gold',
            }, {
                id: uuidv4(), category: 3, name: 'LG 2012', color: 'Gray',
            }, {
                id: uuidv4(), category: 3, name: 'Sony 2015', color: 'Gold',
            }, {
                id: uuidv4(), category: 3, name: 'OnePlus TV', color: 'Black',
            }],
        }
    }

    render() {
        return (
            <div className="App">
                <hr/>
                <AddProductModal products={this.state.products} onAddProduct={this.onAddProduct} categories={this.state.categories}/>
                <hr/>
                <ProductList
                    products={this.state.products}
                    categories={this.state.categories}
                    onDeleteProduct={this.onDeleteProduct}
                    onEditProduct={this.onEditProduct}
                />
                <button onClick={()=>console.log(this.state.products)}>Check Products State</button>
            </div>
        );
    }
}

export default App;
