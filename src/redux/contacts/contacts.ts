/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumn } from "pages/user/contacts/components/ContactTable";
import { INotesForm } from "pages/user/contacts/details/component/notes/useNotesForm";
import { IContacts } from "pages/user/contacts/details/query/useFetchContactById";
import { IAllCount } from "pages/user/contacts/details/query/useFetchTotalCounts";
import { useAppDispatch } from "redux/store";

type IContactIds = number[];
interface IContactDeleteIds {
  id: number;
}
interface IPaginationList {
  contactId: number;
  index: number;
}
export interface IContactsReducer {
  columnIds?: IColumn[];
  contact?: IContacts;
  contactIds?: IContactIds;
  activity?: INotesForm | null;
  myListIds: IContactIds;
  deleteIds?: IContactDeleteIds[];
  paginationList?: IPaginationList[];
  selectedContact?: IPaginationList;
  allCounts?: IAllCount;
}

const initialState: IContactsReducer = {
  columnIds: [],
  contact: {} as IContacts,
  contactIds: [],
  myListIds: [],
  deleteIds: [],
  paginationList: [],
  selectedContact: {} as IPaginationList,
  allCounts: {} as IAllCount,
};

interface IPayload {
  columnIds?: IColumn[];
  contact?: IContacts;
  activity?: INotesForm;
  deleteIds?: IContactDeleteIds[];
  paginationList?: IPaginationList[];
  selectedContact?: IPaginationList;
  allCounts?: IAllCount;
}

interface IAction {
  payload: IPayload;
  type: string;
}

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setColumnIds: (state, action: IAction) => {
      state.columnIds = action.payload.columnIds;
    },
    setContact: (state, action: IAction) => {
      state.contact = action.payload.contact;
    },
    setContactIds: (state, action: PayloadAction<{ contactId: number }>) => {
      const { contactId } = action.payload;
      const findContact = state.contactIds?.find((i) => i === contactId);
      if (findContact) {
        state.contactIds =
          state.contactIds?.filter((i) => i !== contactId) || [];
      } else {
        state.contactIds?.push(contactId);
      }
    },
    setContactMyListIds: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const findMyList = state.myListIds.find((i) => i === id);
      if (findMyList) {
        state.myListIds = state.myListIds.filter((i) => i !== id);
      } else {
        state.myListIds.push(id);
      }
    },
    setContactMyListIdsAll: (
      state,
      action: PayloadAction<{ checked: boolean; listIds: number[] }>,
    ) => {
      const { checked, listIds } = action.payload;
      if (checked) {
        state.myListIds = listIds;
      } else {
        state.myListIds = [];
      }
    },
    setActivity: (state, action: IAction) => {
      state.activity = action.payload.activity;
    },
    removeActivity: (state) => {
      state.activity = null;
    },
    removeContactMyListsIds: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.myListIds = state.myListIds.filter((i) => i !== id);
    },
    setDeleteIds: (state, action: IAction) => {
      const { deleteIds } = action.payload;
      state.deleteIds = deleteIds;
    },
    setPaginationList: (state, action: IAction) => {
      const { paginationList } = action.payload;
      state.paginationList = paginationList;
    },
    setSelectedContact: (state, action: IAction) => {
      const { selectedContact } = action.payload;
      state.selectedContact = selectedContact;
    },
    setAllCounts: (state, action: IAction) => {
      const { allCounts } = action.payload;
      state.allCounts = allCounts;
    },
  },
});

export const {
  setColumnIds,
  setContact,
  setContactIds,
  setActivity,
  removeActivity,
  setContactMyListIds,
  setContactMyListIdsAll,
  removeContactMyListsIds,
  setDeleteIds,
  setPaginationList,
  setSelectedContact,
  setAllCounts,
} = contactSlice.actions;

export const useContactActions = () => {
  const dispatch = useAppDispatch();
  return {
    setColumnIds: (payload: IPayload) => dispatch(setColumnIds(payload)),
    setContact: (payload: IPayload) => dispatch(setContact(payload)),
    setActivity: (payload: IPayload) => dispatch(setActivity(payload)),
    removeActivity: () => dispatch(removeActivity()),
    setDeleteIds: (payload: IPayload) => dispatch(setDeleteIds(payload)),
    setPaginationList: (payload: IPayload) =>
      dispatch(setPaginationList(payload)),
    setSelectedContact: (payload: IPayload) =>
      dispatch(setSelectedContact(payload)),
    setAllCounts: (payload: IPayload) => dispatch(setAllCounts(payload)),
  };
};
const { reducer } = contactSlice;

export default reducer;
