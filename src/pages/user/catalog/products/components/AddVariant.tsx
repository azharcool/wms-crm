import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import CustomModal from "components/layouts/popup-modals/CustomModal";
import Slider from "components/layouts/popup-modals/Slider";
import CustomTableCell from "components/table/CustomTableCell";
import NoDataTableRow from "components/table/no-data-table-row";
import TextField from "components/textfield";
import TextFieldChip from "components/textfield/TextFieldChip";
import { useFormik } from "formik";
import useVariantAction from "hooks/catalog/variant/useVariantAction";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
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
  productName: string;
}

interface IDimension {
  weight: number;
  width: number;
  height: number;
  length: number;
}

interface Value {
  id: string;
  value: string;
  name: string;
  parentId?: string;
}

interface Option {
  id: string;
  name: string;
  values: Value[];
  value: string;
}

interface IVariant {
  id: string;
  image: string;
  name: string;
  options: Value[];
  sku: string;
  barcode: string;
  supplyPrice: number;
  MRP: number;
  retailPrice: number;
  weightAndDimensions: IDimension;
  crossDocking: boolean;
  enable: boolean;
}

type Variants = IVariant[];

type HandleOnChange = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface IDimensionModal {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (_: IDimension) => void;
}
function DimensionModal(props: IDimensionModal) {
  const { open, handleClose, handleSubmit } = props;
  const formik = useFormik({
    initialValues: {
      weight: 0,
      width: 0,
      height: 0,
      length: 0,
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
            size="small"
            type="number"
            value={formik.values.weight}
            onChange={formik.handleChange}
          />
          <TextField
            id="width"
            label="Width"
            name="width"
            size="small"
            type="number"
            value={formik.values.width}
            onChange={formik.handleChange}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <TextField
            id="height"
            label="Height"
            name="height"
            size="small"
            type="number"
            value={formik.values.height}
            onChange={formik.handleChange}
          />
          <TextField
            id="length"
            label="Length"
            name="length"
            size="small"
            type="number"
            value={formik.values.length}
            onChange={formik.handleChange}
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
  const { open, handleClose, productId, productName } = props;
  const [variants, setVariants] = useState<Variants>([]);

  const [options, setOptions] = useState<Option[]>([]);

  const [openModal, setOpenModal] = useState("");

  const userDecoded = useDecodedData();
  const navigate = useNavigate();

  const { addVariantAction } = useVariantAction();

  //* Options
  const createNewOption = () => {
    const newOption: Option = {
      id: crypto.randomUUID(),
      name: "",
      values: [],
      value: "",
    };
    setOptions((s) => [...s, newOption]);
  };

  const removeNewOption = (id: string) => {
    const filterOptions = options.filter((i) => i.id !== id);
    generateCombination(filterOptions);
    setOptions(filterOptions);
  };

  const handleOptionNameChange = (e: HandleOnChange) => {
    const { id, name, value } = e.target;
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          [name]: value,
        };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleValueChange = (e: HandleOnChange) => {
    const { id, value } = e.target;
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          value,
        };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleKeyDown = (args: { keyCode: string; id: string }) => {
    const { keyCode, id } = args;
    if (keyCode === "Enter") {
      const newOptions = options.map((option) => {
        if (option.id === id) {
          return {
            ...option,
            values: [
              ...option.values,
              {
                id: crypto.randomUUID(),
                value: option.value,
                parentId: option.id,
                name: option.name,
              },
            ],
            value: "",
          };
        }
        return option;
      });
      setOptions(newOptions);

      generateCombination(newOptions);
    }
  };

  const handleRemoveOptionValue = ({
    id,
    itemId,
  }: {
    id: string;
    itemId: string;
  }) => {
    const newOptions = options.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          value: "",
          values: i.values.filter((i) => i.id !== itemId),
        };
      }
      return i;
    });

    setOptions(newOptions);
    generateCombination(newOptions);
  };
  //* End Options

  //* Combination Generator
  const generateCombination = (options: Option[]) => {
    const optionValues = options.map((item) => item.values);
    const newGenerateOptionsVariant = generateOptionVariants(optionValues);
    const generateVariant: Variants = newGenerateOptionsVariant.map((i) => {
      return {
        id: crypto.randomUUID(),
        image: "https://app.storfox.com/d9f5ac726db86ff29f7b.png",
        name: `${productName} ${i.map((i) => i.value).join(",")}`,
        options: i.map((item) => ({
          name: item.name,
          value: item.value,
          id: item.id,
        })),
        sku: "",
        barcode: "",
        supplyPrice: 0,
        MRP: 0,
        retailPrice: 0,
        weightAndDimensions: {
          weight: 0,
          width: 0,
          height: 0,
          length: 0,
        },
        crossDocking: false,
        enable: true,
      };
    });

    setVariants(generateVariant);
  };

  const generateOptionVariants = (arr: Value[][]): Value[][] => {
    const result = arr.reduce<Value[][]>(
      (acc, curr) => {
        return acc.flatMap((x) => curr.map((y) => [...x, y]));
      },
      [[]],
    );
    return result;
  };
  //* End Combination Generator

  const handleModal = (status?: string) => {
    // navigate(-1);
    if (status) {
      setOpenModal(status);
      return;
    }
    setOpenModal("");
  };

  async function onSubmit() {
    const newOptions = options.map((item) => {
      return {
        userId: Number(userDecoded.id),
        productId: Number(productId),
        optionName: item.name,
        value: item.values.map((i) => i.value).toString(),
      };
    });
    const variantt = variants.map((i) => {
      return {
        productId: Number(productId),
        userId: Number(userDecoded.id),
        optionName: options.map((i) => i.name).toString(),
        value: i.name.split(" ").slice(1).toString(),
        variantName: i.name,
        sku: i.sku,
        barcode: i.barcode,
        supplyPrice: Number(i.supplyPrice),
        mrp: Number(i.MRP),
        retailPrice: Number(i.retailPrice),
        height: Number(i.weightAndDimensions.height),
        width: Number(i.weightAndDimensions.width),
        length: Number(i.weightAndDimensions.length),
        weight: Number(i.weightAndDimensions.weight),
        crossDocking: true,
        enable: true,
      };
    });
    const data: IAddVariantRequestRoot = {
      productId: Number(productId),
      variantt,
      option: newOptions,
    };

    const response = await addVariantAction(data);
    if (response) {
      navigate(`/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`);
    }
  }

  const handleSubmit = (values: IDimension) => {
    const newVariants = variants.map((i) => {
      if (i.id === openModal) {
        return {
          ...i,
          weightAndDimensions: {
            height: values.height,
            width: values.width,
            length: values.length,
            weight: values.weight,
          },
        };
      }
      return i;
    });
    setVariants(newVariants);
    handleModal();
  };

  const handleVariantItem = (event: HandleOnChange) => {
    const target = event.target as HTMLInputElement;
    changeVariants({
      id: target.id,
      name: target.name,
      value: target.value,
    });
  };

  const changeVariants = (args: {
    value: string | boolean | number;
    name: string;
    id: string;
  }) => {
    const target = args;
    const newVariants = variants.map((item) => {
      if (item.id === target.id) {
        return {
          ...item,
          [target.name]: target.value,
        };
      }
      return item;
    });
    setVariants(newVariants);
  };

  const handleGenerateSkuOrBarcode = (subTitle: string) => {
    if (subTitle.includes("Generate Sku")) {
      const newRandom = generateRandomNumber(4);

      const newItems = variants.map((i, idx) => {
        if (i.sku) {
          return i;
        }

        const position = String(idx + 1);
        const newName: string[] = i.name.split(" ");
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

      setVariants(newItems);
    } else if (subTitle.includes("Generate barcode")) {
      const newItems = variants.map((i) => {
        if (i.barcode) {
          return i;
        }

        return {
          ...i,
          barcode: generateRandomNumber(13),
        };
      });

      setVariants(newItems);
    }
  };

  const isSku = variants.map((i) => i.sku).some((i) => i === "");
  const isBarcode = variants.map((i) => i.barcode).some((i) => i === "");
  const isDisabled = Boolean(variants.length === 0 || isSku || isBarcode);

  return (
    <Slider
      buttonText="Add Variants"
      handleChange={() => {
        onSubmit();
      }}
      handleClose={handleClose}
      isDisabled={isDisabled}
      open={open}
      title="Add Variants"
    >
      <PerfectScrollbar>
        <Box
          sx={{
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              boxShadow: "none",
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
                onClick={() => createNewOption()}
              >
                Add Another Option
              </Button>

              {options.map((option) => {
                return (
                  <Grid key={option.id} container marginTop="5px" spacing={2}>
                    <Grid item xs={3}>
                      <TextField
                        id={option.id}
                        label="Option name"
                        name="name"
                        size="small"
                        value={option.name}
                        onChange={handleOptionNameChange}
                      />
                    </Grid>

                    <Grid item xs={9}>
                      <TextFieldChip
                        chips={option.values}
                        handleDelete={(deleteItem) => {
                          handleRemoveOptionValue({
                            itemId: deleteItem.id,
                            id: option.id,
                          });
                        }}
                        handleKeyDown={(e) =>
                          handleKeyDown({
                            keyCode: e,
                            id: option.id,
                          })
                        }
                        id={option.id}
                        label="Values"
                        name="value"
                        size="small"
                        sxForm={{
                          width: "90%",
                        }}
                        value={option.value}
                        onChange={handleValueChange}
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
                        onClick={() => removeNewOption(option.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </CustomCardContent>
          </Card>
        </Box>

        <Card
          sx={{
            marginTop: "20px",

            borderRadius: "5px",
            boxShadow: "none",
            minWidth: 1050,
          }}
        >
          <CustomCardContent title="Items">
            <TableContainer
              sx={{
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              // component={Paper}
            >
              <PerfectScrollbar>
                <Table
                  sx={{
                    height: "100%",
                  }}
                >
                  <TableHead>
                    <TableRow sx={{}}>
                      {itemsLabel.map((item) => {
                        return (
                          <CustomTableCell
                            key={item.id}
                            isHeader
                            // minWt={100}
                            sxTableCell={{
                              padding: "8px",
                              minWidth: 150,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
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
                                  whiteSpace: "nowrap",
                                  textAlign: "center",
                                }}
                                onClick={() =>
                                  handleGenerateSkuOrBarcode(item.subTitle)
                                }
                              >
                                {item.subTitle}
                              </Typography>
                            ) : null}
                          </CustomTableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {!variants.length ? (
                      <NoDataTableRow
                        colSize={9}
                        title="  No Variants Found! create variant Options"
                      />
                    ) : null}
                    {variants.map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <CustomTableCell
                            sxTableCell={{
                              // minWidth: "50px",
                              padding: "10px",
                              display: "flex",
                              justifyContent: "center",
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
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
                              minWidth: "150px",
                            }}
                          >
                            <Stack
                              direction="row"
                              justifyContent="space-around"
                            >
                              <Box>
                                <Typography
                                  sx={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {item.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "12px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {item.name.split(" ").slice(1).join()}
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
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
                              minWidth: "150px",
                            }}
                          >
                            <TextField
                              id={item.id}
                              label="sku"
                              name="sku"
                              size="small"
                              type="text"
                              value={item.sku}
                              onChange={handleVariantItem}
                            />
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
                              minWidth: "180px",
                            }}
                          >
                            <TextField
                              id={item.id}
                              label="barcode"
                              name="barcode"
                              size="small"
                              type="text"
                              value={item.barcode}
                              onChange={handleVariantItem}
                            />
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
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
                              id={item.id}
                              name="supplyPrice"
                              size="small"
                              type="number"
                              value={item.supplyPrice}
                              onChange={handleVariantItem}
                            />
                          </CustomTableCell>
                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
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
                              id={item.id}
                              name="MRP"
                              size="small"
                              type="number"
                              value={item.MRP}
                              onChange={handleVariantItem}
                            />
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
                            }}
                          >
                            <TextField
                              icon={<Typography>INR</Typography>}
                              id={item.id}
                              name="retailPrice"
                              size="small"
                              type="number"
                              value={item.retailPrice}
                              onChange={handleVariantItem}
                            />
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
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
                          </CustomTableCell>
                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
                            }}
                          >
                            <CustomSwitch
                              checked={item.crossDocking}
                              id={item.id}
                              name="crossDocking"
                              onChange={(_, checked) => {
                                changeVariants({
                                  id: item.id,
                                  name: "crossDocking",
                                  value: checked,
                                });
                              }}
                            />
                          </CustomTableCell>

                          <CustomTableCell
                            sxTableCell={{
                              padding: "10px",
                            }}
                          >
                            <CustomSwitch
                              checked={item.enable}
                              id={item.id}
                              name="enable"
                              onChange={(_, checked) => {
                                changeVariants({
                                  id: item.id,
                                  name: "enable",
                                  value: checked,
                                });
                              }}
                            />
                          </CustomTableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </PerfectScrollbar>
            </TableContainer>
          </CustomCardContent>
        </Card>
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
