import React, {Component} from 'react'
import './Phone.module.css'

class Phone extends Component{
    render() {
        return (
            <tr key={this.props.phone.id}>
                <td>{this.props.phone?.id || " - "}</td>
                <td>{this.props.phone?.name || " - "}</td>
                <td>{this.props.phone?.color || " - "}</td>
                <td>{this.props.phone?.os || " - "}</td>
            </tr>
        )
    }
}

export default Phone;
