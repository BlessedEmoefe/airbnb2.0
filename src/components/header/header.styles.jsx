import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${colors.white};
  padding: 1.5rem 3%;
  z-index: 100;
  transition: 300ms ease-in-out;
  display: flex;
  height: 80px;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 0 0 auto;
  box-shadow: 4px -3px 7px 3px rgba(0, 0, 0, 0.2);
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
