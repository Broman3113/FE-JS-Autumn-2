import {useDispatch} from "react-redux";
import {SORT_PRODUCT_BY_CATEGORY_ACTION, SORT_PRODUCT_BY_NAME_ACTION} from "../../store/products/actions";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const SortButtons = (callback, deps) => {
    const dispatch = useDispatch();

    const {sortType} = useParams();
    const navigate = useNavigate();

    const onSortHandler = (type) => {
        navigate(`/sortPanel/${type}`);
    }
    useEffect(()=>{
        if (sortType) {
            console.log(1);
            dispatch({type: sortType});
        }
    }, [dispatch, sortType])


    return (
        <div className="functionBar">
            <h3>Sort Panel</h3>
            <button style={{padding: '10px', margin: '10px'}}
                onClick={() => onSortHandler(SORT_PRODUCT_BY_NAME_ACTION)}
            >Sort by name
            </button>
            <button style={{padding: '10px', margin: '10px'}}
                // onClick={() => this.setState({products: [...this.state.products].sort((a, b) => this.state.categories.map(item => item.id == a.category ? item.name : false)[0].toString().localeCompare(this.state.categories.map(item => item.id == b.category ? item.name : false)[0].toString()))})}
                onClick={() => onSortHandler(SORT_PRODUCT_BY_CATEGORY_ACTION)}
            >Sort by Category
            </button>


            {/*<button style={{padding: '10px', margin: '10px'}}*/}
            {/*    onClick={() => onSortHandler(SORT_PRODUCT_BY_NAME_ACTION)}*/}
            {/*>Sort by name*/}
            {/*</button>*/}
            {/*<button style={{padding: '10px', margin: '10px'}}*/}
            {/*    // onClick={() => this.setState({products: [...this.state.products].sort((a, b) => this.state.categories.map(item => item.id == a.category ? item.name : false)[0].toString().localeCompare(this.state.categories.map(item => item.id == b.category ? item.name : false)[0].toString()))})}*/}
            {/*    onClick={() => onSortHandler(SORT_PRODUCT_BY_CATEGORY_ACTION)}*/}
            {/*>Sort by Category*/}
            {/*</button>*/}
        </div>
    )
}
