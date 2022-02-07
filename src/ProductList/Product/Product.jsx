import React, {Component} from 'react'
import './Product.module.css'

class Product extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index + 1 || " - "}</td>
                <td>{this.props.product?.name || " - "}</td>
                <td>{this.props.product?.category || " - "}</td>
                <td>{this.props.product?.color || " - "}</td>
                <td><button onClick={() => this.props.onDeleteProduct(this.props.product.id)}>Delete</button></td>
            </tr>
        )
    }
}

export default Product;
