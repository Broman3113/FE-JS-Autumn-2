import React, {useState} from "react";
import ProductList from "./ProductList/ProductList";
import AddProductModal from "./AddProductModal/AddProductModal";
import EditCategory from "./EditCategory/EditCategory";
import './App.css';

import {useSelector} from "react-redux";
import {SortButtons} from "./components/SortButtons/SortButtons";
import {FilterBar} from "./components/FilterBar/FilterBar";
import {selectCategories} from "./store/categories/selectors";



const App = () => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector(selectCategories);

    const [filteredProducts, setFilteredProducts] = useState(null);


    return (
        <div className="App">
            <hr/>
            <AddProductModal />
            <hr/>
            <EditCategory/>
            <hr/>
            <SortButtons/>
            <hr/>
            <FilterBar setFilteredProducts={setFilteredProducts}/>
            <hr/>
            <ProductList
                filteredProducts={filteredProducts}
                products={products}
                categories={categories}
            />
            <button onClick={() => {
                console.log(products);
                console.log(categories);
            }}>Check Products State
            </button>
        </div>);
}

export default App;
