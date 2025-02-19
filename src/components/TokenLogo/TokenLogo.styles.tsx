import { TokenInfo } from "@uniswap/token-lists";

import styled from "styled-components/macro";

export type sizes = "small" | "medium" | "large";

export type StlyedTokenLogoProps = {
  size: sizes;
  tokenInfo: TokenInfo | null;
};

const remSizes: Record<sizes, string> = {
  small: "1.5rem",
  medium: "2.5rem",
  large: "3.125rem",
};

const StyledTokenLogo = styled.div<StlyedTokenLogoProps>`
  width: ${(props) => remSizes[props.size]};
  height: ${(props) => remSizes[props.size]};
  background-image: ${(props) =>
    props.tokenInfo === null ? "none" : "url(" + props.tokenInfo.logoURI + ")"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 50%;
  border-color: ${(props) => props.theme.colors.borderGrey};
  border-style: ${(props) => (props.tokenInfo === null ? "solid" : "none")};
  /* Note this is only applied when not empty. */
  border-width: 1px;
`;

export default StyledTokenLogo;
