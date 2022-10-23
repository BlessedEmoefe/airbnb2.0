import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
  width: auto;
  height: 2.3rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 50px;
    display: none;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
  }
`;
