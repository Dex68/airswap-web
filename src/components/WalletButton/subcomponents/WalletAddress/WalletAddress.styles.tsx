import Blockies from "react-blockies";

import styled from "styled-components";

export const StyledWalletAddress = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  border: 0;
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  background: none;
`;

export const BlockiesContainer = styled.div`
  position: relative;
  margin-right: 1.25rem;

  &::after {
    display: block;
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 50%;
    z-index: 5;
    width: 0.5rem;
    height: 0.5rem;
    top: 1rem;
    left: 1rem;
  }
`;

export const StyledBlockies = styled(Blockies)`
  border-radius: 50%;
  overflow: hidden;
`;

export const GreenCircle = styled.div`
  margin-right: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 50%;
`;
