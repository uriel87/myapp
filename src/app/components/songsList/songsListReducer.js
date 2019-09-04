
import { useReducer } from "react";

const initialState = {
    loading: false,
    error: false,
    songsList: []
};

// function songReducer(state, action) {
const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetching":
            return { ...state, loading: false };
        case "fetched":
            return { ...state, songsList: action.response.data, loading: true };
        case "fetch_failed":
            return { ...state, error: true };
        default:
            return state;
    }
}

const [state, dispatch] = useReducer(songReducer, initialState);

export default songReducer;



