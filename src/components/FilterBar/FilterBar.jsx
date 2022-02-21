import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCategories} from "../../store/categories/selectors";

export const FilterBar = (props) => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch();

    const [titleFilterValue, setTitleFilterValue] = useState('');
    const [categoryFilterValue, setCategoryFilterValue] = useState('');

    useEffect(() => {
        if (titleFilterValue.length || categoryFilterValue.length) {
            let itemsToFilter = products;
            if (titleFilterValue.length) itemsToFilter = itemsToFilter.filter(product => product.name.includes(titleFilterValue));
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
    }, [categories, categoryFilterValue, dispatch, products, titleFilterValue])

    return (
        <div>
            <label htmlFor="filterName">Filter By Name </label>
            <input id="filterName" value={titleFilterValue} type="text" onChange={(e) => setTitleFilterValue(e.target.value)}/>

            <label htmlFor="filterCategory">Filter By Category </label>
            <input id="filterCategory" value={categoryFilterValue} type="text" onChange={(e) => setCategoryFilterValue(e.target.value)}/>
        </div>
    )
}
