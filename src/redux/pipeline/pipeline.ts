/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IPipeline } from "pages/admin/settings/screens/pipelines/query/useFetchPipelines";
import { useAppDispatch } from "redux/store";

export interface IPipelineReducer {
  pipeline: IPipeline | null;
}

const initialState: IPipelineReducer = {
  pipeline: {} as IPipeline,
};

interface IPayload {
  pipeline: IPipeline;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const pipelinesSlice = createSlice({
  name: "pipelines",
  initialState,
  reducers: {
    setPipeline: (state, action: IAction) => {
      state.pipeline = action.payload.pipeline;
    },
    removePipeline: (state) => {
      state.pipeline = null;
    },
  },
});

export const { setPipeline, removePipeline } = pipelinesSlice.actions;

export const usePipelineActions = () => {
  const dispatch = useAppDispatch();
  return {
    setPipeline: (payload: IPayload) => dispatch(setPipeline(payload)),
    removePipeline: () => dispatch(removePipeline()),
  };
};
const { reducer } = pipelinesSlice;

export default reducer;
