import React from 'react'
import PropTypes from 'prop-types'

export default class ColorPicker extends React.Component {

    render() {

        return (
            <div>
                <input type="color" id="head" name="head"
                       value={this.props.color}
                       onChange={this.props.onChangeColor}/>
                <label htmlFor="head">Color</label>
            </div>
        )
    }
}