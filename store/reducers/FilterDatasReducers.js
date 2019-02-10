const initialState = {
    speakersFilter : null
};

function updateFilterData(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'UPDATE_SPEAKERS_LIST' :
            nextState = {
                ...state,
                speakersFilter : action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default updateFilterData

