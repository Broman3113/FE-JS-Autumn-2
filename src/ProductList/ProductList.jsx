import Product from './Product/Product'
import {useSelector} from "react-redux";
import classes from './ProductList.module.css';

const ProductList = (props) => {
    const products = useSelector(state => state.products.products);

    return (
        <div className={classes.productList}>
            <h2>Click on any item to edit</h2>
            <table>
                <thead>
                    <tr>
                        <td>№</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Units</td>
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
