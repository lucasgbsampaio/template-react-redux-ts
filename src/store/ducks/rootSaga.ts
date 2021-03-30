import { all, takeLatest } from 'typed-redux-saga';

import { ExampleTypes } from './example/types';
import { getExample } from './example/sagas';

export default function* rootSaga() {
    return yield* all([takeLatest(ExampleTypes.GET_REQUEST, getExample)]);
}
