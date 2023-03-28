import { Box, CardContent, Container } from "@mui/material";
import useGetAllBundleComposition from "hooks/querys/catalog/bundleComposition/useGetAllBundleComposition";
import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import { useState } from "react";
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
      <CardContent sx={{ paddingTop: 0 }}>
        <Box sx={{ mt: 3 }}>
          <CompositionListing
            bundleComp={bundlesComp}
            bundleId={bundleId}
            handleChange={handleChange}
            isTrue={isTrue}
            setFieldValue={setFieldValue}
            values={values}
            variantData={variantResponse?.data}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Composition;
