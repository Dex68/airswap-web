import { BaseHTMLAttributes, FC } from "react";

import { TokenInfo } from "@uniswap/token-lists";

import StyledTokenLogo, { StlyedTokenLogoProps } from "./TokenLogo.styles";

export type TokenLogoProps = {
  tokenInfo: TokenInfo | null;
} & StlyedTokenLogoProps &
  BaseHTMLAttributes<HTMLImageElement>;

const TokenLogo: FC<TokenLogoProps> = ({ tokenInfo, ...rest }) => {
  return <StyledTokenLogo tokenInfo={tokenInfo} {...rest} />;
};

export default TokenLogo;
