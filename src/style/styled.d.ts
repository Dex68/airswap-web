import "styled-components/macro";

type Typography =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "subtitle"
  | "paragraph"
  | "infoHeading"
  | "infoSubHeading"
  | "formLabel"
  | "formInput"
  | "selectItem"
  | "nav"
  | "link"
  | "small";

type FontProps = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
};

declare module "styled-components" {
  export type ThemeType = "light" | "dark";
  export interface DefaultTheme {
    name: ThemeType;
    colors: {
      primary: string;
      primaryDark: string;
      white: string;
      alwaysWhite: string;
      black: string;
      alwaysBlack: string;
      grey: string;
      borderGrey: string;
      darkGrey: string;
      lightGrey: string;
      placeholderGrey: string;
      red: string;
      orange: string;
      green: string;
      placeholderGradient: string;
    };
    typography: Record<Typography, FontProps>;
  }
}
