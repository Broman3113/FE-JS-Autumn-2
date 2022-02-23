import React, {useState} from 'react';
import classes from './AddProductModal.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addProductAction} from "../store/products/actions";
import {selectCategories} from "../store/categories/selectors";

const AddProductModal = () => {


    const [category, setCategory] = useState(+'');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(+'');
    const [units, setUnits] = useState(+'');

    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log(event.target.value)
        setCategory(+event.target.value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log({title, description, category, price, units});
        dispatch(addProductAction({title, description, category, price, units}));
    }


    return (
        <div className={`${classes.AddProductModal}`}>
            <form onSubmit={onSubmitForm}>
                <div className="block">
                    <h3>Enter Title</h3>
                    <input onBlur={(e) => setTitle(e.target.value)} type="text"/>

                    <h3>Enter Description</h3>
                    <input onBlur={(e) => setDescription(e.target.value)} type="text"/>
                </div>

                <div className="block">
                    <h3>Enter Category</h3>
                    <select name="category" id="category"
                            value={category}
                            onChange={handleChange}>
                        <option value="-">-</option>
                        {categories.map(category => <option key={category.id}
                                                            value={category.id}>{category.name}</option>)}
                    </select>
                </div>

                <div className="block">
                    <h3>Enter Price</h3>
                    <input onBlur={(e) => setPrice(+e.target.value)} type="text"/>

                    <h3>Enter Units</h3>
                    <input onBlur={(e) => setUnits(+e.target.value)} type="text"/>
                </div>
                <br/>
                <div style={{width: '100%'}}>
                    <button >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductModal
