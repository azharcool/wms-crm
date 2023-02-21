import { TypographyOptions } from "@mui/material/styles/createTypography";

import palette from "./palette";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h4Bold: true;
    h5Bold: true;
    h6Bold: true;
    subtitle1Bold: true;
    subtitle2Bold: true;
    subtitle3: true;
    subtitle4: true;
    body1Bold: true;
    body3: true;
    title1: true;
    title2: true;
    title3: true;
    title2Bold: true;
    menu: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h4Bold: React.CSSProperties;
  h5Bold: React.CSSProperties;
  h6Bold: React.CSSProperties;
  subtitle1Bold: React.CSSProperties;
  subtitle2Bold: React.CSSProperties;
  subtitle3: React.CSSProperties;
  subtitle4: React.CSSProperties;
  body1Bold: React.CSSProperties;
  body3: React.CSSProperties;
  title1: React.CSSProperties;
  title2: React.CSSProperties;
  title3: React.CSSProperties;
  title2Bold: React.CSSProperties;
  menu: React.CSSProperties;
}

export default {
  fontFamily: "poppins,sans-serif",
  h1: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "62px",
    lineHeight: "120%",
    letterSpacing: "0.003em",
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "48px",
    letterSpacing: "0.02em",
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "28px",
    lineHeight: "36px",
    letterSpacing: "0.02em",
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "0.02em",
  },
  h4Bold: {
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: "31px",
    lineHeight: "120%",
    letterSpacing: "0.005em",
    fontFamily: "poppins,sans-serif",
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "27px",
    letterSpacing: "0.02em",
  },
  h5Bold: {
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "120%",
    letterSpacing: "0.005em",
    fontFamily: "poppins,sans-serif",
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.005em",
  },
  h6Bold: {
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "120%",
    letterSpacing: "0.005em",
    fontFamily: "poppins,sans-serif",
  },
  subtitle1: {
    color: palette.text.primary,
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
  },
  subtitle1Bold: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  subtitle2: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "18px",
    letterSpacing: "0.02em",
  },
  subtitle2Bold: {
    color: palette.text.primary,
    fontWeight: 600,
    fontSize: "10px",
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  subtitle3: {
    color: palette.text.primary,
    fontWeight: 300,
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  subtitle4: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  body1: {
    color: palette.text.primary,
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.02em",
  },
  body1Bold: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  body2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.02em",
  },
  body3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "22px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  caption: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
  },
  button: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    color: palette.text.secondary,
  },
  title1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  title2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  title3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
  title2Bold: {
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "120%",
    letterSpacing: "0.005em",
    fontFamily: "poppins,sans-serif",
  },
  menu: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    fontFamily: "poppins,sans-serif",
  },
} as ExtendedTypographyOptions;
