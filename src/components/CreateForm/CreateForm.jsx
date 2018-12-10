import React from 'react'
import ColorPicker from "../ColorPicker";

export default class CreateForm extends React.Component {

    state = {value: '', color: '#ff00ff'}

    handleSubmit = () => {
        this.props.onCreate({text: this.state.value, color: this.state.color})
        this.setState({
            value: '',
            color: '#ff00ff'
        })
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    handleColorChange = e => {
        this.setState({
            color: e.target.value,
        })
    }

    render() {
        const {value} = this.state
        return (
            <React.Fragment>
                <input type="text" value={value} onChange={this.handleChange}/>
                <ColorPicker color={this.state.color} onChangeColor={this.handleColorChange}/>
                <button disabled={!value} onClick={this.handleSubmit}>
                    Submit
                </button>
            </React.Fragment>
        )
    }
}
