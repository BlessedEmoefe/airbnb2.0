import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
// import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Link } from "react-router-dom";

export const SubHeaderContainer = styled(FlexibleDiv)`
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
export const DirectorySection = styled(FlexibleDiv)`
  width: 80%;
  min-width: 30%;
  justify-content: flex-start;
  @media only screen and (max-width: 850px) {
    flex-direction: row;
    min-width: max-content;  
    width:50%;
 
  }
`;

export const SearchBarSection = styled(FlexibleDiv)`
  width: auto;
  min-width: 45%;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const ButtonSection = styled(FlexibleDiv)`
  width: auto;
  min-width: 20%;
  cursor: pointer;

  @media only screen and (max-width: 850px) {
    min-width: 40%;
  }
`;

export const FilterSection = styled(FlexibleDiv)`
  width: 20%;
  padding: 0;
  min-width: 10%;
  justify-content: flex-start;
  @media only screen and (max-width:800px){
    width:50%;
  };
`;

export const MainDirectory = styled(Link)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.title};
  font-weight: ${fontWeights.bold};
  text-decoration: none;
  cursor: pointer;
`;

export const Wrapper = styled(FlexibleDiv)`
  width: auto;
  height: auto;
  margin: 0 0.7rem;
  @media only screen and (max-width: 850px) {
    margin: 0;
  }
`;

export const SubDirectory = styled(Link)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.smallBody};
  font-weight: ${fontWeights.semiBold};
  text-decoration: none;
  cursor: pointer;
`;
