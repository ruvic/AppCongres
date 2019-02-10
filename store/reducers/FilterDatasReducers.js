const initialState = {
    speakersFilter : null,
    scheduleFilter : null,
    scheduleFavoriteFilter : null,
};

function updateFilterData(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'UPDATE_SPEAKERS_LIST' :
            nextState = {
                ...state,
                speakersFilter : action.value
            };
            return nextState || state;
        case 'UPDATE_SCHEDULE_LIST' :
            nextState = {
                ...state,
                scheduleFilter : action.value
            };
            return nextState || state;
        case 'UPDATE_FAVORITE_SCHEDULE_LIST' :
            nextState = {
                ...state,
                scheduleFavoriteFilter : action.value
            };
            // store("scheduleFavoriteFilter", action.value);
            return nextState || state;
        default:
            return state
    }
}

export default updateFilterData

