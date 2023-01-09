import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {data} from '../../data/datas';
import {IMenu} from '../../screens/AddScreen';

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };
// export interface CounterState {
//   value: number;
// }

const initialState: any = data;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addMenu: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
