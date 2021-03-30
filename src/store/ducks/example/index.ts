import { Reducer } from 'redux';

import { ExampleState, ExampleTypes } from './types';

const INITIAL_STATE: ExampleState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<ExampleState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ExampleTypes.GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ExampleTypes.GET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            };
        case ExampleTypes.GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: [],
            };
        default:
            return state;
    }
};

export default reducer;
