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
        id: uuidv4(), title: 'iPhone 11 Pro Max', description: 'iPhone 11 Pro is the first to feature a three-camera system', category: 1, price: 56000, units: 2,
    }, {
        id: uuidv4(), title: 'OnePlus 7 Pro', description: 'The seventh generation of one of the most anticipated', category: 1, price: 17250, units: 1,
    }, {
        id: uuidv4(), title: 'Samsung Galaxy 21S', description: 'Samsung Galaxy A21s is a mid-range smartphone.\n', category: 1, price: 38200, units: 3,
    }, {
        id: uuidv4(), title: 'Asus FX553VE', description: 'A laptop', category: 2, price: 23555, units: 2,
    }, {
        id: uuidv4(), title: 'Lenovo Legion y540', description: '15.6-inch gaming notebook with the latest Intel® Core™ processors', category: 2, price: 29999, units: 4,
    }, {
        id: uuidv4(), title: 'MacBook Air 2013', description: 'A glossy 13.3 widescreen', category: 2, price: 38350, units: 5,
    }, {
        id: uuidv4(), title: 'LG 42LS562T', description: 'HDMI x4, USB, DVB-T2, Edge LED, 2012 г.', category: 3, price: 78340, units: 6,
    }, {
        id: uuidv4(), title: 'SONY   X94C', description: 'This is the flagship model of 2015 with the most advanced technology.', category: 3, price: 55000, units: 1,
    }, {
        id: uuidv4(), title: 'OnePlus TV 55 Q1', description: 'OnePlus TV 55 Q1 has excellent picture quality.', category: 3, price: 20000, units: 10,
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
            return {...state, products: [...state.products.sort((a, b) => a.title.localeCompare(b.name))]}
        case SORT_PRODUCT_BY_CATEGORY_ACTION:
            return {...state, products: [...state.products.sort((a, b) => a.category.toString().localeCompare(b.category.toString()))]}
        case FILTER_PRODUCT_BY_NAME_ACTION:
            return {...state, filteredProducts: [action.filteredProducts]}
        default:
            return state
    }
}
