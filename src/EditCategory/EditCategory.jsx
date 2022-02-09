import React from "react"

class EditCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: ''
        }
        this.handleChange = (event) => {
            this.setState({id: +event.target.value.split(',')[0]});
            this.setState({name: event.target.value.split(',')[1]});
            console.log(event.target.value.split(',')[1]);
            console.log(this.state);
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.onEditCategory({...this.state})
                    console.log({...this.state});
                }}>
                    <p>Select Category</p>
                    <select name="category" id="category" value={this.props.categories.id}
                            onChange={this.handleChange}>
                        <option value="-">-</option>
                        {this.props.categories.map(category => <option value={[category.id,category.name]}>{category.name}</option>)}
                    </select>
                    <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    <button>Apply</button>
                </form>
            </div>
        )
    }
}

export default EditCategory;
