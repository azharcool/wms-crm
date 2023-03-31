import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISupplier {
  id: number;
  name: string;
}

export interface ISupplierInitialState {
  supplier: ISupplier;
  supplierIds: number[];
}

export const initialState: ISupplierInitialState = {
  supplier: {
    id: 0,
    name: "",
  },
  supplierIds: [],
};

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    setSupplier: (state, action: PayloadAction<ISupplier>) => {
      state.supplier = action.payload;
    },
    clearSupplier: (state) => {
      state.supplier = {
        id: 0,
        name: "",
      };
    },
    setSupplierId: (state, action: PayloadAction<number>) => {
      const { supplierIds } = state;
      const { payload } = action;
      const findSupplier = supplierIds?.find((i) => i === payload);
      if (findSupplier) {
        state.supplierIds = supplierIds?.filter((i) => i !== payload) || [];
      } else {
        state.supplierIds?.push(payload);
      }
    },
    setAllSupplierIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.supplierIds = payload.ids;
      } else {
        state.supplierIds = [];
      }
    },
  },
});

export const { setSupplier, clearSupplier, setSupplierId, setAllSupplierIds } =
  supplierSlice.actions;

export default supplierSlice.reducer;
