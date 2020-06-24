import { AppState } from "./app-state";
import { StateAction, StateActionType } from "./state-action";


export const appReducer = (state: AppState, action: StateAction): AppState => {
    switch (action.type) {
        case StateActionType.SET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}