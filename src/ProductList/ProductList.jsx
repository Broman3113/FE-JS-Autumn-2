import React, {Component} from 'react'
import Product from "./Product/Product";

class ProductList extends Component {
    render() {
        return (
            <table>
                <caption>Click on any item to edit</caption>
                <thead>
                <tr>
                    <td>№</td>
                    <td>Product Name</td>
                    <td>Category</td>
                    <td>Color</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {this.props.products.map((product, index) => <Product
                    key={product.id}
                    product={product}
                    categories={this.props.categories}
                    index={index}
                    onDeleteProduct={this.props.onDeleteProduct}
                    onEditProduct={this.props.onEditProduct}
                />)}
                </tbody>
            </table>
        )
    }
}
export default ProductList
