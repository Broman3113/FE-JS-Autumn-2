import React, {Component} from "react";
import './App.css';
import ProductList from "./ProductList/ProductList";

import {v4 as uuidv4} from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.onDeleteProduct = (id) => {
            this.setState({
                products: this.state.products.filter(product => product.id !== id)
            })
        }

        this.state = {
            counter: 0,
            products: [{
                id: uuidv4(), category: "phone", name: 'iPhone 11 Pro Max', color: 'Gold',
            }, {
                id: uuidv4(), category: "phone", name: 'OnePlus 7 Pro', color: 'Miracle Blue',
            }, {
                id: uuidv4(), category: "phone", name: 'Samsung Galaxy 21S', color: 'Black',
            }, {
                id: uuidv4(), category: "notebook", name: 'Asus FX553VE', color: 'Black',
            }, {
                id: uuidv4(), category: "notebook", name: 'Lenovo Legion', color: 'Sky Blue',
            }, {
                id: uuidv4(), category: "notebook", name: 'MacBook Air 2013', color: 'Gold',
            }, {
                id: uuidv4(), category: "tv", name: 'LG 2012', color: 'Gray',
            }, {
                id: uuidv4(), category: "tv", name: 'Sony 2015', color: 'Gold',
            }, {
                id: uuidv4(), category: "tv", name: 'OnePlus TV', color: 'Black',
            }]
        }
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.counter}</p>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>Decrease</button>
                <button onClick={() => this.setState({counter: 0})}>Reset</button>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increase</button>
                <hr/>
                <button onClick={() => this.setState({
                    products: [...this.state.products, {
                        id: this.state.products[this.state.products.length - 1].id + 1,
                        category: "tv",
                        name: 'OnePlus TV',
                        color: 'Black',
                    }]
                })}>Add one
                </button>
                <button
                    onClick={() => this.setState({products: this.state.products.slice(0, this.state.products.length - 1)})}>
                    Delete one
                </button>
                <ProductList
                    products={this.state.products}
                    onDeleteProduct={this.onDeleteProduct}
                />
            </div>
        );
    }
}

export default App;
