import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCategories} from "../../store/categories/selectors";
import {useParams, useNavigate} from "react-router-dom";

export const FilterBar = (props) => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch();

    const {titleFilterUrl} = useParams();
    const navigate = useNavigate();
    console.log(titleFilterUrl || '');

    const [titleFilterValue, setTitleFilterValue] = useState('');
    const [categoryFilterValue, setCategoryFilterValue] = useState('');


    useEffect(() => {
        if (titleFilterUrl || titleFilterValue.length || categoryFilterValue.length) {
            let itemsToFilter = products;
            if (titleFilterUrl) itemsToFilter = itemsToFilter.filter(product => product.title.includes(titleFilterUrl));
            if (categoryFilterValue.length) {
                let temp = categories.filter(category => category.name.includes(categoryFilterValue)).map(item => item.id).join('');
                console.log(temp);
                let regExp = new RegExp(`[${temp}]`, 'g');
                console.log(itemsToFilter.map(item => item.category.toString().search(regExp)));
                itemsToFilter = itemsToFilter.filter(product => product.category.toString().search(regExp) > -1);
            }
            props.setFilteredProducts(itemsToFilter)
        } else {
            props.setFilteredProducts(null)
        }
    }, [categories, categoryFilterValue, dispatch, products, titleFilterUrl, titleFilterValue])

    const  onInputHandler = (e) => {
        setTitleFilterValue(e.target.value);
        navigate(`/filterBar/${e.target.value}`);
    }

    return (
        <div className={`functionBar`}>

            <label htmlFor="filterName"><h3>Filter By Name Via URL</h3></label>
            <input id="filterName" value={titleFilterValue} type="text"
                   onChange={onInputHandler}/>


            <label htmlFor="filterCategory"><h3>Filter By Category</h3></label>
            <input id="filterCategory" value={categoryFilterValue} type="text"
                   onChange={(e) => setCategoryFilterValue(e.target.value)}/>
        </div>
    )
}
