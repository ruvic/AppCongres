const initialState = {datas : null}

function updateAppData(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'UPDATE_APP_DATAS' :
            nextState = {
                ...state,
                datas : action.value
            };
            return nextState || state
        default:
            return state
    }
}

export default updateAppData

