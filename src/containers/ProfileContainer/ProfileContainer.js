import { connect } from 'react-redux'
import React, { Component } from 'react'
import { saveProfile } from 'actions/profileActions'
import uuid from 'uuid'
import Profile from "../../components/Profile";
import selectors from 'selectors'

const generateProfile = profile => ({
  ...profile,
  id: profile.id !== 0 ? profile.id : uuid(),
  ts: Date.now(),
})

const mapDispatchToProps = dispatch => ({
  saveProfile: profile => dispatch(saveProfile(generateProfile(profile))),
})

const mapStateToProps = store => ({
  currentProfile: selectors.profile.currentProfile(store),
  getProfile: profile_id => selectors.profile.getProfileById(store, profile_id),
})

class ProfileContainer extends Component {
  render() {
    return <Profile profile={this.props.getProfile(this.props.currentProfile)} getProfile={this.props.getProfile} onSaveProfile={this.props.saveProfile} />
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileContainer)
