import Product from './Product/Product'
import {useSelector} from "react-redux";

const ProductList = (props) => {
    const products = useSelector(state => state.products.products);

    return (
        <div className="productList">
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
                {(props.filteredProducts || products).map((product, index) => <Product
                    key={product.id}
                    product={product}
                    index={index}
                />)}
                </tbody>
            </table>
        </div>
  )
}

export default ProductList
