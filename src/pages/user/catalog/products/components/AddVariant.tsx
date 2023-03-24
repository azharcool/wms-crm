import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import CustomModal from "components/layouts/popup-modals/CustomModal";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import TextFieldChip from "components/textfield/TextFieldChip";
import { useFormik } from "formik";
import useVariantAction from "hooks/catalog/variant/useVariantAction";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { SyntheticEvent, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { IAddVariantRequestRoot } from "types/catalog/variants/addVariantRequest";
import { generateRandomNumber } from "utils";

const itemsLabel = [
  {
    id: crypto.randomUUID(),
    value: "Image",
  },
  {
    id: crypto.randomUUID(),
    value: "Variant",
  },
  {
    id: crypto.randomUUID(),
    value: "SKU",
    subTitle: "Generate Sku",
  },
  {
    id: crypto.randomUUID(),
    value: "Barcode",
    subTitle: "Generate barcode",
  },
  {
    id: crypto.randomUUID(),
    value: "Supply",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "M.R.P",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "Retail price",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "Weight/Dimensions",
  },
  {
    id: crypto.randomUUID(),
    value: "Cross docking",
  },
  {
    id: crypto.randomUUID(),
    value: "Enabled",
  },
];

interface IValue {
  parentId: string;
  id: string;
  value: string;
}
interface IVariant {
  id: string;
  optionName: string;
  values: IValue[];
  value: string;
}

interface IWeightAndDimensions {
  weight: string;
  width: string;
  height: string;
  lenght: string;
}

interface IVariantItem {
  id: string;
  image: string;
  variant: string;
  variantLabel: string;
  sku: string;
  barcode: string;
  supplyPrice: string;
  MRP: string;
  retailPrice: string;
  weightAndDimensions: IWeightAndDimensions;
}

interface IAddVariant {
  open: boolean;
  handleClose: (_?: "open") => void;
  productId: string;
}

interface IDimension {
  weight: string;
  width: string;
  height: string;
  length: string;
}

type HandleEvent = {
  e: SyntheticEvent;
  id: string;
  status: "number" | "";
};

interface IDimensionModal {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (_: IDimension) => void;
}
function DimensionModal(props: IDimensionModal) {
  const { open, handleClose, handleSubmit } = props;
  const formik = useFormik({
    initialValues: {
      weight: "",
      width: "",
      height: "",
      length: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <CustomModal handleClose={handleClose} open={open}>
      <CustomCardContent title="Set weight and dimensions">
        <Stack direction="row" gap={2}>
          <TextField
            id="weight"
            label="Weight"
            name="weight"
            value={formik.values.weight}
            onChange={(e) => {
              formik.setFieldValue(
                "weight",
                e.target.value.replace(/[^0-9]/g, ""),
              );
            }}
          />
          <TextField
            id="width"
            label="Width"
            name="width"
            value={formik.values.width}
            onChange={(e) => {
              formik.setFieldValue(
                "width",
                e.target.value.replace(/[^0-9]/g, ""),
              );
            }}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <TextField
            id="height"
            label="Height"
            name="height"
            value={formik.values.height}
            onChange={(e) => {
              formik.setFieldValue(
                "height",
                e.target.value.replace(/[^0-9]/g, ""),
              );
            }}
          />
          <TextField
            id="length"
            label="Length"
            name="length"
            value={formik.values.length}
            onChange={(e) => {
              formik.setFieldValue(
                "length",
                e.target.value.replace(/[^0-9]/g, ""),
              );
            }}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Button
            startIcon={<ArrowBackIosIcon />}
            sx={{
              borderColor: "#8B0000",
              color: "#8B0000",
              width: "50%",
              boxShadow: "none",
              ":hover": {
                boxShadow: "none",
                borderColor: "#8B0000",
                opacity: 0.6,
                color: "#8B0000",
              },
            }}
            variant="outlined"
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "50%",
              backgroundColor: palette.warning.dark,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: palette.warning.dark,
                opacity: 0.6,
                boxShadow: "none",
              },
            }}
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Done
          </Button>
        </Stack>
      </CustomCardContent>
    </CustomModal>
  );
}

function AddVariant(props: IAddVariant) {
  const { open, handleClose, productId } = props;
  const [variants, setVariants] = useState<IVariant[]>([]);
  const [items, setItems] = useState<IVariantItem[]>([]);
  const [openModal, setOpenModal] = useState("");

  const userDecoded = useDecodedData();
  const navigate = useNavigate();

  const { addVariantAction } = useVariantAction();

  const handleModal = (status?: string) => {
    navigate(-1);
    if (status) {
      setOpenModal(status);
      return;
    }
    setOpenModal("");
  };

  async function onSubmit() {
    const options = variants.map((item) => {
      return {
        userId: Number(userDecoded.id),
        productId: Number(productId),
        optionName: item.optionName,
        value: item.values.map((i) => i.value).toString(),
      };
    });

    const variantt = items.map((i) => {
      return {
        productId: Number(productId),
        userId: Number(userDecoded.id),
        optionName: variants.map((i) => i.optionName).toString(),
        value: "string",
        variantName: i.variant,
        sku: i.sku,
        barcode: i.barcode,
        supplyPrice: Number(i.supplyPrice),
        mrp: Number(i.MRP),
        retailPrice: Number(i.retailPrice),
        height: Number(i.weightAndDimensions.height),
        width: Number(i.weightAndDimensions.width),
        length: Number(i.weightAndDimensions.lenght),
        weight: Number(i.weightAndDimensions.weight),
        crossDocking: true,
        enable: true,
      };
    });

    const data: IAddVariantRequestRoot = {
      productId: Number(productId),
      variantt,
      option: options,
    };

    const response = await addVariantAction(data);

    if (response) {
      navigate(`/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`);
    }
  }

  const handleDeleteVariantById = (id: string) => {
    const filterVariants = variants.filter((i) => i.id !== id);
    setVariants(filterVariants);
  };

  const handleSubmit = (values: IDimension) => {
    const newItems = items.map((i) => {
      if (i.id === openModal) {
        return {
          ...i,
          weightAndDimensions: {
            height: values.height,
            width: values.width,
            lenght: values.length,
            weight: values.weight,
          },
        };
      }
      return i;
    });
    setItems(newItems);
    handleModal();
  };

  const handleAddVariants = () => {
    const newVariants = [
      ...variants,
      {
        id: crypto.randomUUID(),
        optionName: "",
        value: "",
        values: [],
      },
    ];

    setVariants(newVariants);
  };

  function generateVariants(
    array: IValue[][],
    idx = 0,
    currentCombination: string[] = [],
  ): string[][] {
    if (idx === array.length) {
      return [currentCombination];
    }

    const currentArr = array[idx];
    const output: string[][] = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < currentArr.length; i++) {
      const newCombination = [...currentCombination, currentArr[i].value];
      const newIdx = idx + 1;
      const subCombination = generateVariants(array, newIdx, newCombination);
      output.push(...subCombination);
    }

    return output;
  }

  const handleItem = ({ e, id, status }: HandleEvent) => {
    const target = e.target as HTMLInputElement;
    const value =
      status === "number" ? target.value.replace(/[^0-9]/g, "") : target.value;
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [target.name]: value,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <Slider
      buttonText="Add Variants"
      handleChange={() => {
        onSubmit();
      }}
      handleClose={handleClose}
      open={open}
      title="Add Variants"
    >
      <PerfectScrollbar>
        <Box
          sx={{
            marginTop: "20px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <CustomCardContent title="Variant Options">
            <Button
              sx={{
                marginBottom: 2,
                flex: 1,
                backgroundColor: palette.warning.dark,
                color: "#fff",
                boxShadow: "none",
                opacity: 0.5,
                "&:hover": {
                  backgroundColor: palette.warning.dark,
                  opacity: 0.7,
                  boxShadow: "none",
                },
              }}
              variant="contained"
              onClick={() => {
                handleAddVariants();
              }}
            >
              Add Another Option
            </Button>

            {variants.map((item) => {
              return (
                <Grid key={item.id} container marginTop="5px" spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      id={`optionName-${item.id}`}
                      label="Option name"
                      name="optionName"
                      size="small"
                      value={item.optionName}
                      onChange={(e) => {
                        const newVariant = variants.map((i) => {
                          if (i.id === item.id) {
                            return {
                              ...i,
                              optionName: e.target.value,
                            };
                          }
                          return i;
                        });
                        setVariants(newVariant);
                      }}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextFieldChip
                      chips={item.values}
                      handleDelete={(deleteItem) => {
                        const newVariant = variants.map((i) => {
                          if (i.id === item.id) {
                            return {
                              ...i,
                              value: "",
                              values: i.values.filter(
                                (i) => i.id !== deleteItem.id,
                              ),
                            };
                          }
                          return i;
                        });

                        setVariants(newVariant);
                      }}
                      handleKeyDown={(keyCode: string) => {
                        if (keyCode === "Enter") {
                          const findVariant = variants.find(
                            (i) => i.id === item.id,
                          );
                          if (findVariant) {
                            if (findVariant.value) {
                              const newVariant = variants.map((i) => {
                                if (i.id === item.id) {
                                  return {
                                    ...i,
                                    value: "",
                                    values: [
                                      ...i.values,
                                      {
                                        parentId: i.id,
                                        id: crypto.randomUUID(),
                                        value: i.value,
                                      },
                                    ],
                                  };
                                }
                                return i;
                              });

                              const newOptions: IValue[][] = newVariant.map(
                                (i) => i.values,
                              );

                              const generatedVariantItems: string[][] =
                                generateVariants(newOptions);

                              const newItems: IVariantItem[] =
                                generatedVariantItems.map((i) => {
                                  return {
                                    id: crypto.randomUUID(),
                                    image:
                                      "https://app.storfox.com/d9f5ac726db86ff29f7b.png",
                                    variant: `puma ${i.join(",")}`,
                                    variantLabel: `puma ${i.join(" ")}`,
                                    sku: "",
                                    barcode: "",
                                    supplyPrice: "",
                                    MRP: "",
                                    retailPrice: "",
                                    weightAndDimensions: {
                                      weight: "",
                                      width: "",
                                      height: "",
                                      lenght: "",
                                    },
                                  };
                                });

                              setItems(newItems);

                              setVariants(newVariant);
                            }
                          }
                        }
                      }}
                      id={`chip-${item.id}`}
                      label="Values"
                      size="small"
                      style={{
                        width: "100%",
                      }}
                      value={item.value}
                      onChange={(e) => {
                        const newVariant = variants.map((i) => {
                          if (i.id === item.id) {
                            return {
                              ...i,
                              value: e.target.value,
                            };
                          }
                          return i;
                        });
                        setVariants(newVariant);
                      }}
                    />
                    <Button
                      disableFocusRipple
                      disableRipple
                      sx={{
                        ":hover": {
                          background: "transparent",
                        },
                        color: "red",
                      }}
                      onClick={() => {
                        handleDeleteVariantById(item.id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Grid>
                </Grid>
              );
            })}
          </CustomCardContent>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <CustomCardContent title="Items">
            <TableContainer
              sx={{
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <PerfectScrollbar>
                <Table
                  sx={{
                    height: "100%",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      {itemsLabel.map((item) => {
                        return (
                          <TableCell
                            key={item.id}
                            sx={{
                              textAlign: "center",
                              padding: "5px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                              }}
                            >
                              {item.value}
                            </Typography>
                            {item.subTitle ? (
                              <Typography
                                sx={{
                                  textDecoration: "underline",
                                  fontSize: "12px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  if (item.subTitle.includes("Generate Sku")) {
                                    const newRandom = generateRandomNumber(4);

                                    const newItems = items.map((i, idx) => {
                                      const position = String(idx + 1);
                                      const newName: string[] =
                                        i.variantLabel.split(" ");
                                      const generateSku: string = newName
                                        .map((i) => i.slice(0, 2))
                                        .join("")
                                        .toUpperCase()
                                        .concat("-", newRandom, "-")
                                        .concat(position);

                                      return {
                                        ...i,
                                        sku: generateSku,
                                      };
                                    });

                                    setItems(newItems);
                                  } else if (
                                    item.subTitle.includes("Generate barcode")
                                  ) {
                                    const newItems = items.map((i) => {
                                      return {
                                        ...i,
                                        barcode: generateRandomNumber(13),
                                      };
                                    });

                                    setItems(newItems);
                                  }
                                }}
                              >
                                {item.subTitle}
                              </Typography>
                            ) : null}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {!items.length ? (
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography>
                            No Variants Found! create variant Options
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : null}
                    {items.map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell
                            sx={{
                              width: 50,
                              background: "white",
                            }}
                          >
                            <Box
                              sx={{
                                width: "40px",
                                height: "40px",
                              }}
                            >
                              <img alt="new" src={item.image} width="100%" />
                            </Box>
                          </TableCell>

                          <TableCell
                            sx={{
                              minWidth: "200px",
                            }}
                          >
                            <Stack direction="row" gap={1}>
                              <Box>
                                <Typography>{item.variant}</Typography>
                                <Typography
                                  sx={{
                                    fontSize: "12px",
                                  }}
                                >
                                  {item.variant.split(" ").slice(1).join()}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    color: "green",
                                    fontSize: "10px",
                                    backgroundColor: "#b6dcb6",
                                    padding: "5px",
                                    borderRadius: "2px",
                                  }}
                                >
                                  New
                                </Typography>
                              </Box>
                            </Stack>
                          </TableCell>

                          <TableCell
                            sx={{
                              minWidth: "200px",
                            }}
                          >
                            <TextField
                              id="sku"
                              label="sku"
                              name="sku"
                              size="small"
                              value={item.sku}
                              onChange={(e) =>
                                handleItem({ e, id: item.id, status: "" })
                              }
                            />
                          </TableCell>

                          <TableCell
                            sx={{
                              minWidth: "200px",
                            }}
                          >
                            <TextField
                              id="barcode"
                              label="barcode"
                              name="barcode"
                              size="small"
                              value={item.barcode}
                              onChange={(e) =>
                                handleItem({ e, id: item.id, status: "" })
                              }
                            />
                          </TableCell>

                          <TableCell
                            sx={{
                              minWidth: "200px",
                            }}
                          >
                            <TextField
                              icon={
                                <Typography
                                  sx={{
                                    fontSize: "15px",
                                  }}
                                >
                                  INR
                                </Typography>
                              }
                              id="supplyPrice"
                              name="supplyPrice"
                              size="small"
                              value={item.supplyPrice}
                              onChange={(e) =>
                                handleItem({ e, id: item.id, status: "number" })
                              }
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: "200px",
                            }}
                          >
                            <TextField
                              icon={
                                <Typography
                                  sx={{
                                    fontSize: "15px",
                                  }}
                                >
                                  INR
                                </Typography>
                              }
                              id="mrp"
                              name="mrp"
                              size="small"
                              onChange={(e) =>
                                handleItem({ e, id: item.id, status: "number" })
                              }
                            />
                          </TableCell>

                          <TableCell
                            sx={{
                              minWidth: "200px",
                            }}
                          >
                            <TextField
                              icon={<Typography>INR</Typography>}
                              id="retailPrice"
                              name="retailPrice"
                              size="small"
                              onChange={(e) =>
                                handleItem({ e, id: item.id, status: "number" })
                              }
                            />
                          </TableCell>

                          <TableCell
                            sx={{
                              minWidth: "200px",
                              textAlign: "center",
                            }}
                          >
                            <Button
                              onClick={() => {
                                handleModal(item.id);
                              }}
                            >
                              <ModeEditIcon />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button>
                              <ModeEditIcon />
                            </Button>
                          </TableCell>

                          <TableCell>
                            <CustomSwitch checked={false} onChange={() => {}} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </PerfectScrollbar>
            </TableContainer>
          </CustomCardContent>
        </Box>
      </PerfectScrollbar>
      {openModal ? (
        <DimensionModal
          handleClose={() => handleModal()}
          handleSubmit={handleSubmit}
          open={Boolean(openModal)}
        />
      ) : null}
    </Slider>
  );
}

export default AddVariant;
