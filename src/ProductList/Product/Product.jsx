import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './Product.css'

import {deleteProductAction, editProductAction} from "../../store/products/actions";
import {selectCategories} from "../../store/categories/selectors";


const Product = (props) => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const [category, setCategory] = useState(props.product?.category || '');
    const [name, setName] = useState(props.product?.name || '');
    const [color, setColor] = useState(props.product?.color || '');

    const [isEdit1, setIsEdit1] = useState(false);
    const [isEdit3, setIsEdit3] = useState(false);

    const onDeleteProduct = useCallback((id) => {
        dispatch(deleteProductAction({id}));
    }, [dispatch]);

    const onEditProduct = useCallback((product) => {
        dispatch(editProductAction(products.map(stateProduct => {
                if (product.id === stateProduct.id) {
                    return product;
                } else {
                    return stateProduct;
                }
            })
        ))
    }, [dispatch, products])

    const handleChange = useCallback((event) => {
        setCategory(parseInt(event.target.value));
        onEditProduct({
            id: props.product.id,
            category: parseInt(event.target.value),
            name,
            color,
        });
    }, [onEditProduct, props.product.id, name, color])

    const onBlurEvent = useCallback((setIsEdit) => {
        setIsEdit(false);
        onEditProduct({
            id: props.product.id,
            category,
            name,
            color,
        });
    }, [category, color, name, onEditProduct, props.product.id])


    return (
        <tr>
            <td>{props.index + 1 || " - "}</td>
            <td onClick={() => setIsEdit1(true)}>
                {isEdit1 ? <input
                    autoFocus={true}
                    onBlur={() => onBlurEvent(setIsEdit1)}
                    onChange={e => setName(e.target.value)}
                    value={name}/> : name}
            </td>

            <td>
                <select name="category" id="category" value={props.product.category}
                        onChange={handleChange}>
                    <option value="-">-</option>
                    {categories.map(categoryItem => <option key={categoryItem.id}
                                                            value={categoryItem.id}
                                                            >{categoryItem.name}</option>)}
                </select>
            </td>

            <td onClick={() => setIsEdit3(true)}>
                {isEdit3 ? <input
                    autoFocus={true}
                    onBlur={() => onBlurEvent(setIsEdit3)}
                    onChange={e => setColor(e.target.value)}
                    value={color}/> : color}
            </td>

            <td>
                <button onClick={() => onDeleteProduct(props.product.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Product;
