import React from "react";
import {
  SearchBarContainer,
  AnyWhereContainer,
  AnyWhereText,
  AnyWeekContainer,
  AnyWeekText,
  SearchContainer,
  PlaceHolderSection,
  PlaceHolderText,
  SearchIconContainer,
} from "./SearchBar.styles";

import { FaSearch as SearchIcon } from "react-icons/fa";
import { colors } from "../../../infrastructure/theme/colors";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <AnyWhereContainer>
        <AnyWhereText>Anywhere</AnyWhereText>
      </AnyWhereContainer>
      <AnyWeekContainer>
        <AnyWeekText>Any week</AnyWeekText>
      </AnyWeekContainer>
      <SearchContainer>
        <PlaceHolderSection>
          <PlaceHolderText>Add guests</PlaceHolderText>
        </PlaceHolderSection>
        <SearchIconContainer>
          <SearchIcon
            title="Search Icon. click this icon to search"
            size="12px"
            color={colors.white}
          />
        </SearchIconContainer>
      </SearchContainer>
    </SearchBarContainer>
  );
};
