import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IColorState {
  value: string,
}

const initialState: IColorState = {
  value: 'blanchedalmond',
}

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state: IColorState, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
})

export const {setColor} = colorSlice.actions;
export default colorSlice.reducer;