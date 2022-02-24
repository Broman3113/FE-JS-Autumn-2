import { v4 as uuidv4 } from 'uuid';

export const ADD_PRODUCT_ACTION = 'ADD_PRODUCT_ACTION';
export const DELETE_PRODUCT_ACTION = 'DELETE_PRODUCT_ACTION';
export const EDIT_PRODUCT_ACTION = 'EDIT_PRODUCT_ACTION';
export const SORT_PRODUCT_BY_NAME_ACTION = 'SORT_PRODUCT_BY_NAME_ACTION';
export const SORT_PRODUCT_BY_CATEGORY_ACTION = 'SORT_PRODUCT_BY_CATEGORY_ACTION';
export const FILTER_PRODUCT_BY_NAME_ACTION = 'FILTER_PRODUCT_BY_NAME_ACTION';

export const addProductAction = ({title, description, category, price, units}) => {
    return {
        type: ADD_PRODUCT_ACTION,
        product: {
            id: uuidv4(),
            title,
            description,
            category,
            price,
            units,
        }
    }
}
export const deleteProductAction = ({id}) => {
    return {
        type: DELETE_PRODUCT_ACTION,
        id
    }
}
export const editProductAction = (products) => {
    return {
        type: EDIT_PRODUCT_ACTION,
        products
    }
}
export const filterProductByNameAction = ({filteredProducts}) => {
    return {
        type: FILTER_PRODUCT_BY_NAME_ACTION,
        filteredProducts
    }
}
