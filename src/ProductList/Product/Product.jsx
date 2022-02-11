import React, {Component} from 'react'
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneObj: {
                category: this.props.product?.category || '',
                name: this.props.product?.name || '',
                color: this.props.product?.color || '',
            },
        }
        this.handleChange = (event) => {
            this.props.onEditProduct({
                id: this.props.product.id, ...this.state.phoneObj,
                category: parseInt(event.target.value)
            });
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.index + 1 || " - "}</td>
                <td onClick={() => this.setState({isEdit1: true})}>
                    {this.state.isEdit1 ? <input
                        autoFocus={true}
                        onBlur={(e) => {
                            this.setState({isEdit1: false});
                            this.props.onEditProduct({id: this.props.product.id, ...this.state.phoneObj});
                        }}
                        onChange={(e) => this.setState({phoneObj: {...this.state.phoneObj, name: e.target.value}})}
                        value={this.state.phoneObj.name}/> : this.state.phoneObj.name}</td>

                {/*<td>{this.props.categories.filter(category => category.id == this.props.product.category)[0].name || " - "}</td>*/}
                <td>
                    <select name="category" id="category" value={this.props.product.category}
                            onChange={this.handleChange}>
                        <option value="-">-</option>
                        {this.props.categories.map(category => <option key={category.id}
                                                                       value={category.id}
                                                                       selected={category.id === this.state.phoneObj.category}>{category.name}</option>)}
                    </select>
                </td>

                <td onClick={() => this.setState({isEdit3: true})}>
                    {this.state.isEdit3 ? <input
                        autoFocus={true}
                        onBlur={(e) => {
                            this.setState({isEdit3: false, phoneObj: {...this.state.phoneObj, color: e.target.value}});
                            this.props.onEditProduct({id: this.props.product.id, ...this.state.phoneObj});
                        }}
                        onChange={(e) => this.setState({phoneObj: {...this.state.phoneObj, color: e.target.value}})}
                        value={this.state.phoneObj.color}/> : this.state.phoneObj.color}</td>

                <td>
                    <button onClick={() => this.props.onDeleteProduct(this.props.product.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Product;
