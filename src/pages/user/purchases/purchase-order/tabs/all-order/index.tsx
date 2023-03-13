import React,{useState} from 'react'
import AllOrderTable from './component/AllOrderTable'
import allOrders from "./__mock__/allOrdrs.json"

function AllOrder() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleDeleteArea = async (id: number) => {
        // await deletePermission(id);
      };
  return (
    <AllOrderTable
    handleDeletePermission={handleDeleteArea}
    allOrders={allOrders}
    openModal={handleOpen}
    total={0}
  />  )
}

export default AllOrder