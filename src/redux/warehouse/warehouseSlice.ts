import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWarehouse {
  id: number;
  name: string;
}

export interface IWarehouseInitialState {
  warehouse: IWarehouse;
}

export const initialState: IWarehouseInitialState = {
  warehouse: {
    id: 0,
    name: "",
  },
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    setWarehouse: (state, action: PayloadAction<IWarehouse>) => {
      state.warehouse = action.payload;
    },
    clearWarehouse: (state) => {
      state.warehouse = {
        id: 0,
        name: "",
      };
    },
  },
});

export const { setWarehouse, clearWarehouse } = warehouseSlice.actions;

export default warehouseSlice.reducer;
