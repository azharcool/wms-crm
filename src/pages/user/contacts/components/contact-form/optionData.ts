export interface IMenuItem {
  id: number;
  value: string;
}

export const clientRole: IMenuItem[] = [
  { id: 1, value: "Client" },
  { id: 2, value: "Not Client" },
  { id: 3, value: "Past Client" },
];
export const followUpOptions: IMenuItem[] = [
  { id: 1, value: "Next Week" },
  { id: 2, value: "Two Weeks" },
  { id: 3, value: "Three Weeks" },
  { id: 4, value: "One Month" },
  { id: 5, value: "Two Month" },
  { id: 6, value: "Three Month" },
];
export const recordOwner: IMenuItem[] = [
  { id: 1, value: "Sales" },
  { id: 2, value: "Appointment Setter" },
];
export const refferedBy: IMenuItem[] = [
  { id: 1, value: "Ben awad" },
  { id: 2, value: "Thommas" },
];
export const cardType: IMenuItem[] = [
  { id: 1, value: "Visa" },
  { id: 2, value: "MasterCard" },
  { id: 3, value: "American Express" },
  { id: 4, value: "PayPal" },
  { id: 5, value: "Apple Pay" },
  { id: 6, value: "eCheck" },
  { id: 7, value: "JCB" },
];

export const entityOption: IMenuItem[] = [
  { id: 1, value: "LLC" },
  { id: 2, value: "Non Profit" },
  { id: 3, value: "INC" },
  { id: 4, value: "Sole Propietor" },
];
