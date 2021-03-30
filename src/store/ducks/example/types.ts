/**
 * Action types
 */
export enum ExampleTypes {
    GET_REQUEST = '@example/GET_REQUEST',
    GET_SUCCESS = '@example/GET_SUCCESS',
    GET_FAILURE = '@example/GET_FAILURE',
}

/**
 * Data types
 */
export interface Example {
    example: string;
}

/**
 * State type
 */
export interface ExampleState {
    readonly data: Example[];
    readonly loading: boolean;
    readonly error: boolean;
}
