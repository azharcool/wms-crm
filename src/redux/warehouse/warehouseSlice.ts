import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWarehouse {
  id: number;
  name: string;
}

export interface IWarehouseInitialState {
  warehouse: IWarehouse;
  warehouseIds: number[];
}

export const initialState: IWarehouseInitialState = {
  warehouse: {
    id: 0,
    name: "",
  },
  warehouseIds: [],
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
    setWarehouseId: (state, action: PayloadAction<number>) => {
      const { warehouseIds } = state;
      const { payload } = action;
      const findWarehouse = warehouseIds?.find((i) => i === payload);
      if (findWarehouse) {
        state.warehouseIds = warehouseIds?.filter((i) => i !== payload) || [];
      } else {
        state.warehouseIds?.push(payload);
      }
    },
    setAllWarehouseIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.warehouseIds = payload.ids;
      } else {
        state.warehouseIds = [];
      }
    },
  },
});

export const {
  setWarehouse,
  clearWarehouse,
  setWarehouseId,
  setAllWarehouseIds,
} = warehouseSlice.actions;

export default warehouseSlice.reducer;
