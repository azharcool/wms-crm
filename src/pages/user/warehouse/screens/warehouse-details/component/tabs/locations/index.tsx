import { Container } from "@mui/material";
import useProductAction from "hooks/catalog/product/useProductAction";
import useGetAllProduct from "hooks/querys/catalog/product/useGetAllProduct";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedProduct } from "redux/catalog/productSelector";
import LocationListing from "./component/LocationListing";
// import ProductListing from "./components/ProductListing";
// import Locations from './index';

function Locations() {
  const navigate = useNavigate();
  const [productPagination, setproductPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const getSelectedProductIdsState = useSelector(getSelectedProduct);

  const { bulkDeleteProductAsync } = useProductAction();

  const { data: productPaginationResponse } =
    useGetAllProduct(productPagination);

  return (
    <Container maxWidth={false}>
      <LocationListing />
    </Container>
  );
}

export default Locations;
