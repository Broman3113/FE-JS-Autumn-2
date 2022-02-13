import React, {useState} from 'react';
import classes from './AddProductModal.module.css';

const AddProductModal = (props) => {
    const [category, setCategory] = useState(+'');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        setCategory(+event.target.value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log({category, name, color});
        props.onAddProduct({category, name, color})
    }

    return (
        <div className={classes.modalForm}>
            <form onSubmit={onSubmitForm}>
                <p>Enter Name</p>
                <input onBlur={(e) => setName(e.target.value)} type="text"/>

                <p>Enter Category</p>
                <select name="category" id="category"
                        value={category}
                        onChange={handleChange}>
                    <option value="-">-</option>
                    {props.categories.map(category => <option key={category.id}
                                                              value={category.id}>{category.name}</option>)}
                </select>

                <p>Enter Color</p>
                <input onBlur={(e) => setColor(e.target.value)} type="text"/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProductModal
