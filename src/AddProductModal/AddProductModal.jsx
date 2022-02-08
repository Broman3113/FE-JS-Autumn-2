import React, {Component} from 'react'
import classes from './AddProductModal.module.css';

class AddProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            name: '',
            color: '',
        }
        this.handleChange = (event) => {
            console.log(event.target.value)
            this.setState({category: +event.target.value});
        }
        this.onSubmitForm = (e) => {
            e.preventDefault();
            console.log(this.state);
            this.props.onAddProduct(this.state)
        }
    }


    render() {
        return (
            <div className={classes.modalForm}>
                <form onSubmit={this.onSubmitForm}>
                    <p>Enter Name</p>
                    <input onBlur={(e) => this.setState({name: e.target.value})} type="text"/>

                    <p>Enter Category</p>
                    <select name="category" id="category" value={this.state.category}
                            onChange={this.handleChange}>
                        <option value="-">-</option>
                        {this.props.categories.map(category => <option value={category.id}>{category.name}</option>)}
                    </select>

                    <p>Enter Color</p>
                    <input onBlur={(e) => this.setState({color: e.target.value})} type="text"/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddProductModal
