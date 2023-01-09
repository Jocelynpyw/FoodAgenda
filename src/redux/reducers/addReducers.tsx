import {createSlice} from '@reduxjs/toolkit';
import {data} from '../../data/datas';

const addSlice = createSlice({
  name: 'add',
  initialState: {
    data: data,
  },
  reducers: {
    AddData: (state, action) => {
      state?.userData = action.payload;
    },
  },
});

export const {AddData} = addSlice.actions;
export default addSlice.reducer;
