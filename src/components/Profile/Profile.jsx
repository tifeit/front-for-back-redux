import React from 'react'
import PropTypes from 'prop-types'

export default class Profile extends React.Component {

    state = {first_name: '', last_name: ''}

    handleSubmit = () => {
        this.props.onSaveProfile({
            id: this.props.profile.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        const {first_name, last_name} = this.state
        return (
            <React.Fragment>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" value={first_name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name"  value={last_name}  onChange={this.handleChange}/>
                </div>
                <button disabled={!first_name || !last_name} onClick={this.handleSubmit}>
                    Submit
                </button>
                <div>
                    Profile id: {this.props.profile.id}<br/>
                    Profile First name: {this.props.profile.first_name}<br/>
                    Profile Last name: {this.props.profile.last_name}<br/>
                </div>
            </React.Fragment>
        )
    }
}