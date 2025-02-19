import styled from "styled-components/macro";

export const StyledSiteLogo = styled.svg`
  width: 10rem;
  height: 3.125rem;
  fill: ${(props) =>
    props.theme.name === "light"
      ? props.theme.colors.primary
      : props.theme.colors.white};
`;
