import React, {useCallback, useState} from "react"
import {selectCategories} from "../store/categories/selectors";
import {useDispatch, useSelector} from "react-redux";
import {editCategoryAction} from "../store/categories/actions";

const EditCategory = () => {
    const [id, setId] = useState(+'');
    const [name, setName] = useState('');
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const onSubmitForm = (e) => {
        e.preventDefault();
        onEditCategory({id, name})
        console.log({id, name});
    }

    const onEditCategory = useCallback((category) => {
        dispatch(editCategoryAction(categories.map(stateCategories => {
            if (category.id === stateCategories.id) {
                return category;
            } else {
                return stateCategories;
            }
        })))
    }, [categories, dispatch])

    const onSelectChange = useCallback((event) => {
        setId(+event.target.value);
        setName(categories.filter((category) => category.id === +event.target.value)[0].name);
    }, [categories])

    return (
        <div className="functionBar">
            <form onSubmit={onSubmitForm}>
                <h3>Select Category</h3>
                <select name="category"
                        id="category"
                        value={categories.id}
                        onChange={onSelectChange}>
                    <option value="-">-</option>
                    {categories.map(category => <option key={category.id}
                                                              value={category.id}>{category.name}</option>)}
                </select>
                <input type="text"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
                <button>Apply</button>
            </form>
        </div>
    )

}

export default EditCategory;
