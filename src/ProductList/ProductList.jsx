import React, {Component} from 'react'
import Product from "./Product/Product";

class ProductList extends Component {
    render() {
        return (
            <table>
                <tbody>
                    {this.props.products.map((product, index) => <Product
                        key={product.id}
                        product={product}
                        index={index}
                        onDeleteProduct={this.props.onDeleteProduct}
                    />)}
                </tbody>
            </table>
        )
    }
}

export default ProductList;
