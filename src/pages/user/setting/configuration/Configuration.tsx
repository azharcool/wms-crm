import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleIcon from "@mui/icons-material/People";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

const { setting } = AppRoutes;

const configurationList = [
  {
    id: crypto.randomUUID(),
    title: "Currency Rate",
    desc: "Manage base currency and exchange rates",
    icon: <AttachMoneyIcon />,
    href: `/${setting.layout}/${setting.configuration.CurrencyRate}`,
  },
  {
    id: crypto.randomUUID(),
    title: "Taxes",
    desc: "Set up multiple tax types",
    icon: <AttachMoneyIcon />,
    // href: "/${setting.layout}/${setting.configuration.taxes}",
    href: `/${setting.layout}/${setting.configuration.taxes}`,
  },
  {
    id: crypto.randomUUID(),
    title: "Product Condition",
    desc: "Define product conditions and grades",
    icon: <ShoppingBasketIcon />,
    href: `/${setting.layout}/${setting.configuration.productCondition}`,
  },
  {
    id: crypto.randomUUID(),
    title: "Adjustment Reasons",
    desc: "Add custom reasons to your stock adjustments",
    icon: <RadioButtonCheckedIcon />,
    href: `/${setting.layout}/${setting.configuration.adjustmentReasons}`,
  },
  {
    id: crypto.randomUUID(),
    title: "Container types",
    desc: "Create various containers such as cartons, pallets, totes.",
    icon: <StayCurrentPortraitIcon />,
    href: "",
  },
  {
    id: crypto.randomUUID(),
    title: "Templates",
    desc: "Set up you custom templates for labels and documents",
    icon: <GridViewIcon />,
    href: "",
  },
  {
    id: crypto.randomUUID(),
    title: "Contracts",
    desc: "Invite your merchants/clients to the system",
    icon: <PeopleIcon />,
    href: "",
  },
  {
    id: crypto.randomUUID(),
    title: "Automation rules",
    desc: "Create automation rules for your system",
    icon: <ShoppingBasketIcon />,
    href: "",
  },
  {
    id: crypto.randomUUID(),
    title: "Billing profiles",
    desc: "Create billing profiles for your company",
    icon: <ShoppingBasketIcon />,
    href: "",
  },
  {
    id: crypto.randomUUID(),
    title: "Delivery method",
    desc: "Create delivery methods for your company",
    icon: <ShoppingBasketIcon />,
    href: "",
  },
];

function Configuration() {
  const navigate = useNavigate();
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar title="Configuration" />
        <Stack direction="row" flexWrap="wrap" gap={2} marginTop={2}>
          {configurationList.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  padding: "20px",
                  width: "300px",
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "#cdcccc95",
                  },
                }}
                onClick={() => {
                  navigate(item.href);
                }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={1}
                  justifyContent="center"
                >
                  {item.icon}
                  <Stack>
                    <Typography component="h3">{item.title}</Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: "13px",
                        color: "#585555",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </Stack>
      </CardContent>
    </Container>
  );
}

export default Configuration;
