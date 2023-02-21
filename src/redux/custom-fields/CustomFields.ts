/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "redux/store";

export interface ICustomFieldsReducer {
  fields: any[];
  sections: any[];
  form: any;
}

const initialState: ICustomFieldsReducer = {
  fields: [] as any[],
  sections: [] as any[],
  form: {} as any,
};

interface IPayload {
  field?: any;
  section?: any;
  sections?: any;
  id?: string;
  sectionName?: string;
  sectionId?: string;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const formBuilderSlice = createSlice({
  name: "customFields",
  initialState,
  reducers: {
    addSection: (state, action: IAction) => {
      const sections = [...state.sections, action.payload.section];
      state.sections = sections;
    },
    setSection: (state, action: IAction) => {
      const { sections } = action.payload;
      state.sections = sections;
    },
    setSectionName: (state, action: IAction) => {
      const newSection = state.sections?.map((item) => {
        if (item.id === action.payload.sectionId) {
          item.sectionName = action.payload.sectionName;
        }
        return item;
      });
      state.sections = newSection;
    },
    addField: (state, action: IAction) => {
      const newSection = state.sections?.map((item) => {
        if (item.id === action.payload.field.sectionId) {
          item.fields = [...(item?.fields || []), action.payload.field];
        }
        return item;
      });
      state.sections = newSection;
    },
    removeField: (state, action: IAction) => {
      const newSection = state.sections?.map((item) => {
        if (item.id === action.payload.field.sectionId) {
          const fields = item?.fields?.filter(
            (x: any) => x.id !== action.payload.field.id,
          );
          item.fields = fields;
        }
        return item;
      });
      state.sections = newSection;
    },
    removeSection: (state, action: IAction) => {
      state.sections = state.sections?.filter(
        (x: any) => x.id !== action.payload.id,
      );
    },
    saveForm: (state) => {
      state.form = state.sections;
    },
  },
});

export const {
  addField,
  removeField,
  addSection,
  setSectionName,
  removeSection,
  saveForm,
  setSection,
} = formBuilderSlice.actions;

export const useCustomFieldsActions = () => {
  const dispatch = useAppDispatch();

  return {
    addSection: (payload: IPayload) => dispatch(addSection(payload)),
    addField: (payload: IPayload) => dispatch(addField(payload)),
    removeField: (payload: IPayload) => dispatch(removeField(payload)),
    removeSection: (payload: IPayload) => dispatch(removeSection(payload)),
    setSectionName: (payload: IPayload) => dispatch(setSectionName(payload)),
    setSection: (payload: IPayload) => dispatch(setSection(payload)),
    saveForm: () => dispatch(saveForm()),
  };
};
const { reducer } = formBuilderSlice;

export default reducer;
