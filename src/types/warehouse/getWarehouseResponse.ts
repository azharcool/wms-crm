export interface IGetWarehouseResponseRoot {
    statusCode: number
    data: any[]
    totalDocs: number
  }
  
  export interface IGetWarehouseResponseData {
    id: number
    userId: number
    userName: string
    warehouseName: string
    label: string
    email: string
    phoneNumber: string
    address: string
    country: string
    city: string
    zipCode: string
    lat: number
    lng: number
    firstName: string
    lastName: string
    primaryEmail: string
    primaryPhoneNumber: string
    pickingStrategy: string
    receivingStrategy: string
    timezone: string
    receivingType: string
    defaultWarehouse: boolean
    allowPartialPacking: boolean
    status: number
    createdOn: string
    updatedOn: any
  }
  