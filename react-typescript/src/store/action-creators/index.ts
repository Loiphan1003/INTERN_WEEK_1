import { Dispatch } from "redux";
import { ActionType } from "../action-types";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}