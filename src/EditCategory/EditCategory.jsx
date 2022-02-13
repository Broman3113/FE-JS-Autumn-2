import React, {useCallback, useState} from "react"

const EditCategory = (props) => {
    const [id, setId] = useState(+'');
    const [name, setName] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        props.onEditCategory({id, name})
        console.log({id, name});
    }

    const onSelectChange = useCallback((event) => {
        setId(+event.target.value.split(',')[0]);
        setName(event.target.value.split(',')[1]);
        console.log(event.target.value.split(',')[1]);
        console.log(id, name);
    }, [id, name, setId, setName])

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <p>Select Category</p>
                <select name="category"
                        id="category"
                        value={props.categories.id}
                        onChange={onSelectChange}>
                    <option value="-">-</option>
                    {props.categories.map(category => <option key={category.id}
                                                              value={[category.id, category.name]}>{category.name}</option>)}
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
