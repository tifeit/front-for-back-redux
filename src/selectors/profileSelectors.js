export const getProfilesMap = state => state.profileReducer.byProfileId
export const currentProfile = state => state.profileReducer.currentProfile
export const getProfileById = (state, id) => getProfilesMap(state)[id]
