import React from "react";
import {
  PersonalizedContainer,
  BecomeAHostContainer,
  BecomeAHostText,
  GlobeIconContainer,
  ProfileBoxContainer,
  IconContainer,
} from "./PersonalizedSection.styles";
import { FiGlobe as GlobeIcon } from "react-icons/fi";

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { FaUserCircle as AvatarIcon } from "react-icons/fa";
import { colors } from "../../../infrastructure/theme/colors";

export const PersonalizedSection = () => {
  return (
    <PersonalizedContainer>
      <BecomeAHostContainer>
        <BecomeAHostText>Become a Host</BecomeAHostText>
      </BecomeAHostContainer>
      <GlobeIconContainer>
        <GlobeIcon
          title="Language and Region Icon. click this icon to select your region and language"
          size="16px"
          color={colors.text.regular}
        />
      </GlobeIconContainer>

      <ProfileBoxContainer>
        <IconContainer padding>
          <MenuIcon
            title="Menu Icon. click this icon to open more option"
            size="16px"
            color={colors.text.regular}
          />
        </IconContainer>
        <IconContainer>
          <AvatarIcon
            title="Avatar Icon. click this icon to open more option"
            size="30px"
            color={colors.text.soft}
          />
        </IconContainer>
      </ProfileBoxContainer>
    </PersonalizedContainer>
  );
};
