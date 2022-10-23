import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";

export const SearchBarContainer = styled(FlexibleDiv)`
  background: ${colors.white};
  width: auto;
  height: auto;
  padding: 0.5rem 0.4rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
`;
export const AnyWhereContainer = styled(FlexibleDiv)`
  width: auto;
  padding: 0 16px;
  cursor: pointer;
`;
export const AnyWhereText = styled(Text)`
  width: auto;
  color: ${colors.text.regular};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.semiBold};
`;
export const AnyWeekContainer = styled(FlexibleDiv)`
  width: auto;
  padding: 0 16px;
  border-left: 1px solid ${colors.dividerColor};
  border-right: 1px solid ${colors.dividerColor};
  cursor: pointer;
`;
export const AnyWeekText = styled(Text)`
  width: auto;
  color: ${colors.text.regular};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.semiBold};
`;
export const SearchContainer = styled(FlexibleDiv)`
  width: auto;
  cursor: pointer;
`;
export const PlaceHolderSection = styled(FlexibleDiv)`
  padding: 0 16px;
  width: auto;
`;

export const PlaceHolderText = styled(Text)`
  width: auto;
  color: ${colors.text.soft};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.regular};
`;
export const SearchIconContainer = styled(FlexibleDiv)`
  border-radius: 50%;
  background: ${colors.primary};
  padding: 10px;
  width: auto;
`;
