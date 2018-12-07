import React from 'react'

export default class CreateForm extends React.Component {
  state = { value: '', color: '#ff00ff' }

  handleSubmit = () => {
    this.props.onCreate({ text: this.state.value, color: this.state.color })
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
    const { value, color } = this.state
    return (
      <React.Fragment>
        <input type="text" value={value} onChange={this.handleChange} />
          <div>
              <input type="color" id="head" name="head"
                     value={color}
                     onChange={this.handleColorChange}/>
                  <label htmlFor="head">Color</label>
          </div>
        <button disabled={!value} onClick={this.handleSubmit}>
          Submit
        </button>
      </React.Fragment>
    )
  }
}
