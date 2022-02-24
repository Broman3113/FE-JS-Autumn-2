import React, {useState} from "react";
import ProductList from "./ProductList/ProductList";
import AddProductModal from "./AddProductModal/AddProductModal";
import EditCategory from "./EditCategory/EditCategory";
import './App.css';

import {useSelector} from "react-redux";
import {SortButtons} from "./components/SortButtons/SortButtons";
import {FilterBar} from "./components/FilterBar/FilterBar";
import {selectCategories} from "./store/categories/selectors";
import {Routes, Route, Link} from "react-router-dom";
import {TotalPrice} from "./components/TotalPrice/TotalPrice";
import DeleteCategory from "./DeleteCategory/DeleteCategory";


const App = () => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector(selectCategories);

    const [filteredProducts, setFilteredProducts] = useState(null);

    return (
        <div className="App">
            <nav className="nav">
                <Link to={`/addProduct`}>Add Product</Link>
                <Link to={`/editCategory`}>Edit Category</Link>
                <Link to={`/DeleteCategory`}>Delete Category</Link>
                <Link to={`/sortPanel`}>Sort Panel</Link>
                <Link to={`/filterBar`}>Filter Panel</Link>

                <button style={{marginTop: '10px', position: 'absolute', right: '20px', top: '50px'}} onClick={() => {
                    console.log(products);
                    console.log(categories);
                }}>Check Products State
                </button>
            </nav>
            <Routes>
                <Route path="/*" element={<AddProductModal/>}/>
                <Route path="/editCategory" element={<EditCategory/>}/>
                <Route path="/deleteCategory" element={<DeleteCategory/>}/>
                <Route path="/sortPanel" element={<SortButtons/>}/>
                <Route path="/sortPanel/:sortType" element={<SortButtons/>}/>
                <Route path="/filterBar" element={<FilterBar setFilteredProducts={setFilteredProducts}/>}/>
                <Route path="/filterBar/:titleFilterUrl" element={<FilterBar setFilteredProducts={setFilteredProducts}/>}/>
            </Routes>
            <ProductList filteredProducts={filteredProducts}/>

            <TotalPrice filteredProducts={filteredProducts} products={products}/>

        </div>);
}

export default App;
