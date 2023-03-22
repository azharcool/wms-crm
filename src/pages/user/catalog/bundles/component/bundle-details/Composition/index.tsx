import React, { useState } from "react";
import { Box, Card, CardContent, Container } from "@mui/material";
import useGetAllBundleComposition from "hooks/querys/catalog/bundleComposition/useGetAllBundleComposition";
import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import { useNavigate } from "react-router-dom";
import CompositionListing from "./component/CompositionListing";

interface IComposition {
  isTrue: boolean;
  bundleId?: number;
  values?: any;
  setFieldValue: any;
  handleChange: any;
}

function Composition(props: IComposition) {
  const { isTrue, bundleId, values, setFieldValue, handleChange } = props;
  const [bundlePagination, setBundlePagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { data: variantResponse } = useGetAllVariant({});

  const {
    data: bundlesComp,
    refetch,
    isLoading,
    isFetching: isFetchingBundle,
  } = useGetAllBundleComposition(bundlePagination);
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <Box sx={{ mt: 3 }}>
            <CompositionListing
              variantData={variantResponse?.data}
              bundleComp={bundlesComp}
              bundleId={bundleId}
              isTrue={isTrue}
              values={values}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Composition;
