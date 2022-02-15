import React, {useCallback, useEffect, useState} from "react";
import './App.css';
import ProductList from "./ProductList/ProductList";
import AddProductModal from "./AddProductModal/AddProductModal";
import EditCategory from "./EditCategory/EditCategory";

import {v4 as uuidv4} from 'uuid';

const InitialState = {
    categories: [{
        id: 1, name: 'phone'
    }, {
        id: 2, name: 'notebook'
    }, {
        id: 3, name: 'tv'
    },],
    products: [{
        id: uuidv4(), category: 1, name: 'iPhone 11 Pro Max', color: 'Gold',
    }, {
        id: uuidv4(), category: 1, name: 'OnePlus 7 Pro', color: 'Miracle Blue',
    }, {
        id: uuidv4(), category: 1, name: 'Samsung Galaxy 21S', color: 'Black',
    }, {
        id: uuidv4(), category: 2, name: 'Asus FX553VE', color: 'Black',
    }, {
        id: uuidv4(), category: 2, name: 'Lenovo Legion', color: 'Sky Blue',
    }, {
        id: uuidv4(), category: 2, name: 'MacBook Air 2013', color: 'Gold',
    }, {
        id: uuidv4(), category: 3, name: 'LG 2012', color: 'Gray',
    }, {
        id: uuidv4(), category: 3, name: 'Sony 2015', color: 'Gold',
    }, {
        id: uuidv4(), category: 3, name: 'OnePlus TV', color: 'Black',
    }],
}

const App = () => {
    const [categories, setCategories] = useState(InitialState.categories);
    const [products, setProducts] = useState(InitialState.products);

    const [filteredProducts, setFilteredProducts] = useState(InitialState.products);

    const [titleFilterValue, setTitleFilterValue] = useState('');
    const [categoryFilterValue, setCategoryFilterValue] = useState('');

    const onDeleteProduct = useCallback((id) => {
        setProducts(products.filter(product => product.id !== id))
    }, [setProducts, products]);

    const onAddProduct = useCallback(({category, name, color}) => {
        setProducts([
            ...products,
            {
                id: uuidv4(),
                category,
                name,
                color,
            }])
    }, [setProducts, products])

    const onEditCategory = useCallback((category) => {
        setCategories(categories.map(stateCategories => {
                if (category.id === stateCategories.id) {
                    return category;
                } else {
                    return stateCategories;
                }
            })
        )
    }, [setCategories, categories])

    const onEditProduct = useCallback((product) => {
        setProducts(products.map(stateProduct => {
                if (product.id === stateProduct.id) {
                    return product;
                } else {
                    return stateProduct;
                }
            })
        )
    }, [setProducts, products])
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
            setFilteredProducts(itemsToFilter);
        } else {
            setFilteredProducts(null);
        }
    }, [categories, categoryFilterValue, products, titleFilterValue])


    return (
        <div className="App">
            <hr/>
            <AddProductModal products={products}
                             onAddProduct={onAddProduct}
                             categories={categories}/>
            <hr/>
            <EditCategory categories={categories}
                          onEditCategory={onEditCategory}/>
            <hr/>
            <button
                onClick={() => setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)))}
            >Sort by name
            </button>
            <button
                // onClick={() => this.setState({products: [...this.state.products].sort((a, b) => this.state.categories.map(item => item.id == a.category ? item.name : false)[0].toString().localeCompare(this.state.categories.map(item => item.id == b.category ? item.name : false)[0].toString()))})}
                onClick={() => setProducts([...products].sort((a, b) => a.category.toString().localeCompare(b.category.toString())))}
            >Sort by Category
            </button>
            <hr/>
            <label htmlFor="filterName">Filter By Name </label>
            <input id="filterName" value={titleFilterValue} type="text" onChange={(e) => setTitleFilterValue(e.target.value)}/>

            <label htmlFor="filterCategory">Filter By Category </label>
            <input id="filterCategory" value={categoryFilterValue} type="text" onChange={(e) => setCategoryFilterValue(e.target.value)}/>
            <hr/>
            <ProductList
                filteredProducts={filteredProducts}
                products={products}
                categories={categories}
                onDeleteProduct={onDeleteProduct}
                onEditProduct={onEditProduct}
            />
            <button onClick={() => {
                console.log(products);
                console.log(categories);
            }}>Check Products State
            </button>
        </div>);
}

export default App;
