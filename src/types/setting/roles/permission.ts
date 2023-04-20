export interface IFullfillment {
  orders: string[];
  customers: string[];
  picklists: string[];
  packing: string[];
  shipments: string[];
  returns: string[];
}
export interface ICatalog {
  product: string[];
  variants: string[];
  categories: string[];
  brand: string[];
  listing: string[];
  unit: string[];
  channels: string[];
}

export interface IPurchases {
  purchase: string[];
  supplier: string[];
}
export interface IStocks {
  adjustment: string[];
  putaway: string[];
  receive: string[];
  stockTransfer: string[];
  unitNumbers: string[];
  movements: string[];
}

export interface ISettings {
  adjustmentReasons: string[];
  containerTypes: string[];
  integrations: string[];
  users: string[];
  roles: string[];
  filters: string[];
  condition: string[];
  paymentType: string[];
  account: string[];
  files: string[];
  billing: string[];
  automation: string[];
  contracts: string[];
}

export interface IWarehouses {
  warehouse: string[];
  area: string[];
  zone: string[];
  location: string[];
  container: string[];
}
export interface IDashboard {
  overview: string[];
}
export interface IFinance {
  invoice: string[];
}
