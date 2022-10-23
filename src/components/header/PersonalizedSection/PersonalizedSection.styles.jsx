import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";

export const PersonalizedContainer = styled(FlexibleDiv)`
  background: ${colors.white};
  width: auto;
  height: auto;
`;
export const BecomeAHostContainer = styled(FlexibleDiv)`
  width: auto;
  padding: 0 16px;
  cursor: pointer;
`;
export const BecomeAHostText = styled(Text)`
  width: auto;
  color: ${colors.text.regular};
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.semiBold};
`;

export const GlobeIconContainer = styled(FlexibleDiv)`
  border-radius: 50%;
  background: transparent;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  width: auto;
  :hover {
    background: ${colors.iconColor};
  }
`;

export const ProfileBoxContainer = styled(FlexibleDiv)`
  width: auto;
  cursor: pointer;
  padding: 0.3rem 0.4rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
`;
export const IconContainer = styled(FlexibleDiv)`
  padding: ${({ padding }) => (padding ? "0 10px" : 0)};
  width: auto;
`;
