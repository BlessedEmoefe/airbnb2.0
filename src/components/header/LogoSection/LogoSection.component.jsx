import React from "react";
import { LogoWrapper, Logo } from "./LogoSection.styles";
import logo from "../../../assets/Airbnb-Logo.png"

export const LogoSection = () => {
  return (
    <LogoWrapper to="/">
      <Logo src={logo} alt="logo" />
    </LogoWrapper>
  );
};
