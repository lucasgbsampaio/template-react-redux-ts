import { call, put } from 'typed-redux-saga';

import api from '../../../services/api';

import { getExampleFailure, getExampleSuccess } from './actions';

export function* getExample() {
    try {
        yield* call(api.get, 'example');

        yield* put(getExampleSuccess());
    } catch (err) {
        yield* put(getExampleFailure());
    }
}
