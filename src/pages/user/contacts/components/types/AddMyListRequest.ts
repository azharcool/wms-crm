export interface AddMyListRoot {
  id: number;
  userId: number;
  listName: string;
  listDescription: string;
  contactList: IContactList[];
}

export interface IContactList {
  id: number;
  myListId: number;
  contactId: number;
}
