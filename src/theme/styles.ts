import theme from "theme";

const styles = {
  menuBtnStyles: {
    px: theme.spacing(2),
    py: theme.spacing(1),
    backgroundColor: "#FF0000",
    color: "white",
    "&:hover": {
      backgroundColor: "#FF0000",
      color: "white",
    },
  },
  viewAllStyles: {
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    textDecorationColor: theme.palette.text.tertiary,
    textDecorationThickness: "1.25px !important",
    cursor: "pointer",
  },
  tncStyles: {
    "& > p": {
      m: theme.spacing(1),
      "& > h3, ul": {
        m: 0,
      },
    },
  },
  profileBtn: {
    px: theme.spacing(1.5),
    py: theme.spacing(1.25),
    alignSelf: "flex-start",
    marginTop: `${theme.spacing(3.5)} !important`,
    width: "100px",
    textTransform: "none",
  },
};

export default styles;
