import React from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/reducers'
import { deposit, withdraw } from '../../store/reducers/bankSlice';
// import { ActionType } from '../../store/action-types';

export const ExampleOne = () => {

  const state = useSelector((state: RootState) => state.bank.value)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>{state}</h1>
      <button
       onClick={() => 
          dispatch(deposit(100))
        }
      >
        Deposit
      </button>

      <button onClick={() => {
        dispatch(withdraw(100))
      }}>
        Withdraw
      </button>
    </div>
  )
}
