import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import classes from './Product.modal.css'

import {deleteProductAction, editProductAction} from "../../store/products/actions";
import {selectCategories} from "../../store/categories/selectors";


const Product = (props) => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const [category, setCategory] = useState(props.product?.category || '');
    const [title, setTitle] = useState(props.product?.title || '');
    const [description, setDescription] = useState(props.product?.description || '');
    const [price, setPrice] = useState(props.product?.price || '');
    const [units, setUnits] = useState(props.product?.units || '');

    const [isEdit1, setIsEdit1] = useState(false);
    const [isEdit2, setIsEdit2] = useState(false);
    const [isEdit4, setIsEdit4] = useState(false);
    const [isEdit5, setIsEdit5] = useState(false);

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
            title,
            description,
            category: parseInt(event.target.value),
            price,
            units,
        });
    }, [description, onEditProduct, price, props.product.id, title, units])

    const onBlurEvent = useCallback((setIsEdit) => {
        setIsEdit(false);
        onEditProduct({
            id: props.product.id,
            title,
            description,
            category,
            price,
            units,
        });
    }, [category, description, onEditProduct, price, props.product.id, title, units])


    return (
        <tr>
            <td>{props.index + 1 || " - "}</td>
            <td onClick={() => setIsEdit1(true)}>
                {isEdit1 ? <input
                    autoFocus={true}
                    onBlur={() => onBlurEvent(setIsEdit1)}
                    onChange={e => setTitle(e.target.value)}
                    value={title}/> : title}
            </td>

            <td onClick={() => setIsEdit2(true)}>
                {isEdit2 ? <input
                    autoFocus={true}
                    onBlur={() => onBlurEvent(setIsEdit2)}
                    onChange={e => setDescription(e.target.value)}
                    value={description}/> : description}
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

            <td onClick={() => setIsEdit4(true)}>
                {isEdit4 ? <input
                    autoFocus={true}
                    onBlur={() => onBlurEvent(setIsEdit4)}
                    onChange={e => setPrice(+e.target.value)}
                    value={price}/> : price}
            </td>

            <td onClick={() => setIsEdit5(true)}>
                {isEdit5 ? <input
                    autoFocus={true}
                    onBlur={() => onBlurEvent(setIsEdit5)}
                    onChange={e => setUnits(+e.target.value)}
                    value={units}/> : units}
            </td>

            <td>
                <button className="btn-primary" onClick={() => onDeleteProduct(props.product.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Product;
