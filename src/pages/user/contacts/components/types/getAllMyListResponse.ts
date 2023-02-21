export interface GetAllMyListResponseRoot {
  statusCode: number;
  data: GetAllMyListData[];
}

export interface GetAllMyListData {
  id: number;
  userId: number;
  listName: string;
  listDescription: string;
  status: number;
  createdOn: string;
  updatedOn: any;
  myListContact: any;
}
