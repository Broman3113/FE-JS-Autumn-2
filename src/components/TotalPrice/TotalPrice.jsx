export const TotalPrice = (props) => {
    return (
        <div>
            <h3>Total Price</h3>
            <p>
                {(props.filteredProducts || props.products)
                    .reduce((acc, product) => acc + (product.price * product.units), 0)}
            </p>
        </div>
    )
}
