import {useDispatch} from "react-redux";
import {SORT_PRODUCT_BY_CATEGORY_ACTION, SORT_PRODUCT_BY_NAME_ACTION} from "../../store/products/actions";
import React from "react";

export const SortButtons = () => {
    const dispatch = useDispatch();

    const onSortHandler = (type) => {
        dispatch({type: type})
    }
    return (
        <div>
            <button
                onClick={() => onSortHandler(SORT_PRODUCT_BY_NAME_ACTION)}
            >Sort by name
            </button>
            <button
                // onClick={() => this.setState({products: [...this.state.products].sort((a, b) => this.state.categories.map(item => item.id == a.category ? item.name : false)[0].toString().localeCompare(this.state.categories.map(item => item.id == b.category ? item.name : false)[0].toString()))})}
                onClick={() => onSortHandler(SORT_PRODUCT_BY_CATEGORY_ACTION)}
            >Sort by Category
            </button>
        </div>
    )
}
