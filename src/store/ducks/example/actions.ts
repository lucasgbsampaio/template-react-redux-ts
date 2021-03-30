import { action } from 'typesafe-actions';

import { ExampleTypes, Example } from './types';

export const getExampleRequest = () => action(ExampleTypes.GET_REQUEST);
export const getExampleSuccess = () => action(ExampleTypes.GET_SUCCESS);
export const getExampleFailure = () => action(ExampleTypes.GET_FAILURE);
