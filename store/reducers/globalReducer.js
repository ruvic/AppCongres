const initialState = {scheduleNavigation : {}}

function updateGlobalData(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'UPDATE_SCHEDULE_NAV' :
            nextState = {
                ...state,
                scheduleNavigation : action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default updateGlobalData

