import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const DividerLine = styled("div")`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "1px")};
  background: ${({ background }) => (background ? background : "#BDBDBD")};
  margin: ${({ margin }) => (margin ? margin : "5px auto")};
  background: linear-gradient(left, #f5f5f5 2%, #bdbdbd 50%, #f5f5f5 98%);
`;
export const VerticalDividerLineWrapper = styled(FlexibleDiv)``;
export const VerticalDividerLine = styled("div")`
  width: ${({ width }) => (width ? width : "1px")};
  height: ${({ height }) => (height ? height : "100%")};
  background: ${({ background }) =>
    background ? background : colors.black.soft};
  margin: ${({ margin }) => (margin ? margin : "0")};
  position: absolute;
  padding: 0;
  min-height: inherit;
`;
