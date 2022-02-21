import {v4 as uuidv4} from "uuid";
import {
    ADD_PRODUCT_ACTION,
    DELETE_PRODUCT_ACTION, EDIT_PRODUCT_ACTION, FILTER_PRODUCT_BY_NAME_ACTION,
    SORT_PRODUCT_BY_CATEGORY_ACTION,
    SORT_PRODUCT_BY_NAME_ACTION
} from "./actions";


const initialState = {
    filteredProducts: null,
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

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_ACTION:
            return {...state, products: [...state.products, action.product]}
        case DELETE_PRODUCT_ACTION:
            return {...state, products: state.products.filter(product => product.id !== action.id)}
        case EDIT_PRODUCT_ACTION:
            return {...state, products: action.products}
        case SORT_PRODUCT_BY_NAME_ACTION:
            return {...state, products: [...state.products.sort((a, b) => a.name.localeCompare(b.name))]}
        case SORT_PRODUCT_BY_CATEGORY_ACTION:
            return {...state, products: [...state.products.sort((a, b) => a.category.toString().localeCompare(b.category.toString()))]}
        case FILTER_PRODUCT_BY_NAME_ACTION:
            return {...state, filteredProducts: [action.filteredProducts]}
        default:
            return state
    }
}
