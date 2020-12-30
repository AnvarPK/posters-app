import { SET_POSTER_DATA } from '../actions/poster'

const initialPosterData = []

export default (state = initialPosterData, action) => {
    switch (action.type) {
        case SET_POSTER_DATA:
            return action.payload;
            break;

        default:
            return state;
            break;
    }

}
