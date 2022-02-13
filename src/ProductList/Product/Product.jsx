import React, {useState} from 'react'
import './Product.css'

const Product = (props) => {
    const [category, setCategory] = useState(props.product?.category || '');
    const [name, setName] = useState(props.product?.name || '');
    const [color, setColor] = useState(props.product?.color || '');

    const [isEdit1, setIsEdit1] = useState(false);
    const [isEdit3, setIsEdit3] = useState(false);

    const handleChange = (event) => {
        props.onEditProduct({
            id: props.product.id,
            category: parseInt(event.target.value),
            name,
            color,
        });
    }


    return (
        <tr>
            <td>{props.index + 1 || " - "}</td>
            <td onClick={() => setIsEdit1(true)}>
                {isEdit1 ? <input
                    autoFocus={true}
                    onBlur={(e) => {
                        setIsEdit1(false);
                        props.onEditProduct({
                            id: props.product.id,
                            name,
                            color,
                            category,
                        });
                    }}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}/> : name}</td>

            {/*<td>{this.props.categories.filter(category => category.id == this.props.product.category)[0].name || " - "}</td>*/}
            <td>
                <select name="category" id="category" value={props.product.category}
                        onChange={handleChange}>
                    <option value="-">-</option>
                    {props.categories.map(categoryItem => <option key={categoryItem.id}
                                                                   value={categoryItem.id}
                                                                   selected={categoryItem.id === category}>{categoryItem.name}</option>)}
                </select>
            </td>

            <td onClick={() => setIsEdit3(true)}>
                {isEdit3 ? <input
                    autoFocus={true}
                    onBlur={(e) => {
                        setIsEdit3(false);
                        setColor(e.target.value);
                        props.onEditProduct({id: props.product.id, category, name, color});
                    }}
                    onChange={(e) => setColor(e.target.value)}
                    value={color}/> : color}</td>

            <td>
                <button onClick={() => props.onDeleteProduct(props.product.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Product;
