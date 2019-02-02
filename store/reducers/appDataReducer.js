const initialState = {data : null}

function updateAppData(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'UPDATE_APP_DATA' :
            nextState = {
                ...state,
                data : action.value
            };
            return nextState || state
        default:
            return state
    }
}

export default updateAppData

