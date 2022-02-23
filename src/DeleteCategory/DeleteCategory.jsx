import React, {useCallback, useState} from "react"
import {selectCategories} from "../store/categories/selectors";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../store/products/selectors";
import {deleteCategoryAction} from "../store/categories/actions";

const EditCategory = () => {
    const categories = useSelector(selectCategories);
    const products = useSelector(selectProducts)
    const dispatch = useDispatch();

    const onDeleteAction = (id) => {
        if (!products.filter(product => product.category === id).length) {
            dispatch(deleteCategoryAction({id}));
        } else {
            alert(`Category with id: ${id} has bounded to some products`);
        }
    }

    return (
        <div className="functionBar">
            <h3>Categories</h3>
            <table>
                <tbody>
                    {categories.map((category, index) => {
                        return (
                            <tr key={category.id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>
                                    <button onClick={() => onDeleteAction(category.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default EditCategory;
