import Product from './Product/Product'

const ProductList = (props) => {
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
                {props.products.map((product, index) => <Product
                    key={product.id}
                    product={product}
                    categories={props.categories}
                    index={index}
                    onDeleteProduct={props.onDeleteProduct}
                    onEditProduct={props.onEditProduct}
                />)}
                </tbody>
            </table>
        </div>
  )
}

export default ProductList
