import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Options {
  optionName: string;
  optionValue: string;
}

export interface IVariantsInitialState {
  options: Options;
}

export const initialState: IVariantsInitialState = {
  options: {
    optionName: "",
    optionValue: "",
  },
};

const variantsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<Options>) => {
      state.options = action.payload;
    },
  },
});

export const { setOptions } = variantsSlice.actions;

export default variantsSlice.reducer;
