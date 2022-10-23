import React from "react";
import logo from "../../assets/logo.png";
import { HeaderContainer, InnerWrapper } from "./header.styles.jsx";

import { FaUserCog as UserProfileIcon } from "react-icons/fa";
import { MdDashboardCustomize as MenuIcon } from "react-icons/md";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";
import { LogoSection } from "./LogoSection/LogoSection.component";
import { SearchBar } from "./SearchBar/SearchBar.component";
import { PersonalizedSection } from "./PersonalizedSection/PersonalizedSection.component";

const Header = () => {
  return (
    <HeaderContainer>
      <InnerWrapper>
        <LogoSection />
        <SearchBar />
        <PersonalizedSection />
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
