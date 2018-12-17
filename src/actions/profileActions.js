import * as types from 'constants/actionTypes'

export const saveProfile = profile => ({type: types.SAVE_PROFILE, profile})

export const getProfileById = profile => ({type: types.GET_PROFILE, profile})