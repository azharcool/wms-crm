import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, CardContent, Stack, Typography } from "@mui/material";
import useGetAllByBundleIdBundleComposition from "hooks/querys/catalog/bundleComposition/useGetAllByBundleIdBundleComposition";
import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import palette from "theme/palette";

import useBundleCompositionAction from "hooks/actions/catalog/bundlle-composition/useBundleCompositionAction";
import useDecodedData from "hooks/useDecodedData";
import { AddBundlCompositionRequestRoot } from "types/catalog/bundleComposition/addBundleCompostionRequest";
import CompositionListing from "./component/CompositionListing";

export interface IBundleCompositionList {
  id: number;
  image: string;

  sku: string;

  unitPrice: number;
  conditionCode: string;

  productId: number;
  productName: string;

  productVariantId: number;
  productVariantName: string;

  discount: number;
  qty: number;
  total: number;
}

export type BundleList = IBundleCompositionList[];

interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

function ToolBarButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 25px",
          backgroundColor: palette.warning.dark,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

function Composition() {
  const [bundleCompositionList, setBundleCompositionList] =
    useState<BundleList>([]);
  const [isManage, setIsManage] = useState(false);
  const { bundleId } = useParams();
  const { data: variantResponse } = useGetAllVariant({});
  const { addBundleCompositionAction, editBundleCompositionAction } =
    useBundleCompositionAction();
  const userDecoded = useDecodedData();

  const { data: getAllBundleCompositionResponse } =
    useGetAllByBundleIdBundleComposition({
      bundleId: Number(bundleId),
    });

  useEffect(() => {
    if (getAllBundleCompositionResponse) {
      const newBundleComposition: BundleList =
        getAllBundleCompositionResponse.data.map((item) => ({
          id: item.id,
          conditionCode: item.conditionCode,
          discount: item.discount,
          unitPrice: item.unitPrice,
          image: "",
          productId: item.productId,
          productName: item.productName,
          productVariantId: item.productVariantId,
          productVariantName: item.productVariantName,
          sku: "",
          qty: item.qty,
          total: item.total,
        }));
      setBundleCompositionList(newBundleComposition);
    }
  }, [getAllBundleCompositionResponse]);

  const handleSubmit = async () => {
    let response = false;
    const isNew = getAllBundleCompositionResponse?.data.length === 0;
    const data: AddBundlCompositionRequestRoot = {
      bundleComposition: bundleCompositionList.map((item) => ({
        ...(!isNew && {
          id: item.id,
        }),
        userId: Number(userDecoded.id),
        bundleId: Number(bundleId),
        productId: item.productId,
        productVariantId: item.productVariantId,
        unitPrice: Number(item.unitPrice),
        conditionCode: item.conditionCode,
        discount: Number(item.discount),
        qty: Number(item.qty),
        total: Number(item.total),
      })),
    };

    if (data.bundleComposition?.length) {
      if (getAllBundleCompositionResponse?.data.length === 0) {
        response = await addBundleCompositionAction(data);
      } else {
        response = await editBundleCompositionAction(data);
      }

      if (response) {
        setIsManage(false);
      }
    }
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-end">
        {getAllBundleCompositionResponse?.data.length === 0 || isManage ? (
          <>
            <ToolBarButton
              handleClick={() => {
                setIsManage(false);
              }}
              icon={
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              }
              title="Cancel"
            />

            <ToolBarButton
              handleClick={() => {
                handleSubmit();
              }}
              icon={
                <SaveIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              }
              title="Save"
            />
          </>
        ) : (
          <ToolBarButton
            handleClick={() => {
              setIsManage(true);
            }}
            icon={
              <EditIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            }
            title="Edit"
          />
        )}
      </Stack>

      <CardContent sx={{ paddingTop: 0 }}>
        <CompositionListing
          bundleCompositionList={bundleCompositionList}
          isManage={
            getAllBundleCompositionResponse?.data.length === 0 || isManage
          }
          setBundleCompositionList={setBundleCompositionList}
          variantData={variantResponse?.data}
        />
      </CardContent>
    </>
  );
}

export default Composition;
