import React from "react";

class ProductEditHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isEdit: false,
        }
    }
    render(){
        return(
            <td onClick={()=>this.setState({isEdit: true})}>
                {this.state.isEdit ? <input
                    onBlur={(e)=>{
                        this.setState({isEdit: false, phoneObj: {...this.state.phoneObj, [this.props.tagName]: e.target.value}});
                        this.props.onEditProduct({id: this.props.product.id, ...this.state.phoneObj});
                    }}
                    onChange={(e) => this.setState({phoneObj: {...this.state.phoneObj, [this.props.tagName]: e.target.value}})}
                    value={this.state.phoneObj[this.props.tagName]}/> : this.state.phoneObj[this.props.tagName]}</td>
        )
    }
}

export default ProductEditHandler;
