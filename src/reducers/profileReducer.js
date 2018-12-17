import { combineReducers } from 'redux'
import * as types from 'constants/actionTypes'

const initialState = {
  0: {
    id: 0,
    last_name: '',
    first_name: '',
    ts: 0
  }
}

const byProfileId = (state = initialState, action) => {
  const { type, profile, id } = action
  switch (type) {
    case types.SAVE_PROFILE: {
      return { ...state, [profile.id]: profile }
    }
    case types.GET_PROFILE: {
      return {
        ...state,
        [id]: { ...state[id], ...profile },
      }
    }

    default:
      return state
  }
}

const currentProfile = (state = 0, action) => {

  const { type, profile } = action
  switch (type) {
    case types.SAVE_PROFILE: {
      return profile.id
    }
  }
     return state

}

export default combineReducers({ byProfileId, currentProfile })
