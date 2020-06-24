export enum StateActionType {
    SET_USER
}

export type StateAction = {
    type: StateActionType;
    payload: any;
}