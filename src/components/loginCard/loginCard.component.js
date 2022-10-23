import React from "react";
import {
  LoginCardWrapper,
  Title,
  // SubTitle,
  Wrapper,
  ForgotPasswordText,
  ActiveLink,
} from "./loginCard.styles";

// import { RiShieldUserLine as MiniAdminIcon } from "react-icons/ri";
// import { FaUserShield as AdminIcon } from "react-icons/fa";
// import { FaUserFriends as TellerIcon } from "react-icons/fa";
// import { VerticalDivider } from "../divider/divider.component";

import { Spacer } from "../spacer/spacer.component";
import { Input } from "../input/input.component";
// import { colors } from "../../infrastructure/theme/colors";
import { Button } from "../button/button.component";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { useNavigate, Link } from "react-router-dom";

export const LoginCard = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/overview");
  };
  return (
    <LoginCardWrapper paddingVertical>
      <Title>Login to Account</Title>
      {/* <Spacer/> */}
      <Wrapper>
        <Input
          name="Hello world"
          innerLabel="Username"
          type="text"
          placeholder="Input Username"
        />
        <Spacer />
        <Input
          name="Hello world"
          innerLabel="Secrete key"
          type="password"
          placeholder="Secrete Key"
        />
        <Wrapper>
          <ForgotPasswordText>
            Forgot Password?{" "}
            <Link style={{ textDecoration: "none" }} to={"/contact-admin"}>
              <ActiveLink>Contact Admin</ActiveLink>
            </Link>
          </ForgotPasswordText>
        </Wrapper>
        <Spacer />
        <Button
          btnText="Sign In"
          textTransform="uppercase"
          fontSize={fontSizes.smallBody}
          onClick={handleSignIn}
          size="large"
        />

        <Wrapper>
          <ForgotPasswordText>
            Don't have an account?
            <Link style={{ textDecoration: "none" }} to={"/contact-admin"}>
              <ActiveLink>Contact Admin</ActiveLink>
            </Link>
            to create one
          </ForgotPasswordText>
        </Wrapper>
      </Wrapper>
    </LoginCardWrapper>
  );
};
