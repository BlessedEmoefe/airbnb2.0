import React, { useState } from "react";
import { SearchBar } from "../SearchBar/searchBar.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  SubHeaderContainer,
  DirectorySection,
  SearchBarSection,
  ButtonSection,
  MainDirectory,
  FilterSection,
  Wrapper,
  SubDirectory,
} from "./subHeader.styles";
import { Button } from "../button/button.component";
import { BsPlusCircle as AddIcon } from "react-icons/bs";
import { RightArrowIcon } from "../../assets/svg";
import { useLocation } from "react-router-dom";
import Modal from "../modal/modal.component";
import NewCustomer from "../newCustomer/newCustomer.component";
import { Text } from "../typography/text.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { SelectDropdown } from "../selectDropdown/selectDropdown.component";
import DropDown from "../selectDropdown/testDropDown.component";

export const SubHeader = ({
  mainDirectory,
  subDirectory,
  customers,
  searchBar,
  placeholder,
  btn,
  btnText,
  filter
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleNewCustomer = () => {
    console.log("Hello New customer being created");
    setOpenModal(true);
  };
  const location = useLocation();
  console.log(location);

  // Defines when the device width is 680 so that the modal will have an overflow attribute pf scroll
  const d = (window.innerWidth = 680);

  return (
    <>
      <SubHeaderContainer paddingVertical="0" backgroundColor="red">
        <DirectorySection paddingVertical="0">
          <MainDirectory
            to={mainDirectory === "Overview" ? "/overview" : "#"}
            onClick={() => {
              console.log(location);
            }}
          >
            {mainDirectory}
          </MainDirectory>
          {subDirectory ? (
            <Wrapper>
              <RightArrowIcon
                color={colors.black.strong}
                height={12}
                width={12}
              />
            </Wrapper>
          ) : null}

          {subDirectory ? (
            <SubDirectory to={location.pathname}>{subDirectory}</SubDirectory>
          ) : null}

          {customers ? (
            <Wrapper>
              <Text
                resalign={"auto"}
                resmargin={"0px"}
                marginLeft={"35px"}
                fontSize={fontSizes.body}
                fontWeight={fontWeights.bold}
                color={colors.black.strong}
              >
                Joe Gardner
              </Text>
            </Wrapper>
          ) : null}
        </DirectorySection>
        {searchBar ? (
          <SearchBarSection paddingVertical="0">
            <SearchBar
              placeholder={placeholder ? placeholder : "Search Customers, IDs"}
              handleChange={(e) => {
                // handleNewCustomer();
                console.log(e.target.value);
              }}
              color={colors.black.strong}
            />
          </SearchBarSection>
        ) : null}
          {btn ? (
        <ButtonSection paddingVertical="0">
            <Button
              btnText={btnText ? btnText : "New Customer"}
              background="transparent"
              border={`1px solid ${colors.primary}`}
              btnColor={colors.primary}
              onClick={handleNewCustomer}
              LeftIcon={AddIcon}
              size="large"
            />
        </ButtonSection>
          ) : null}

        {filter ? (
          <FilterSection>
            {/* <SelectDropdown
              padding={"0.4rem 0.2rem"}
              arrowColor={colors.black.regular}
              shadow="none"
              selectLabel={"State"}
            /> */}
    
            <DropDown label={"Users"} components={['Joe Garden','Micheal Branson', 'Victor Ikechukwu']}/>
          </FilterSection>
        ) : null}
      </SubHeaderContainer>

      <Modal scroll={d} show={openModal} setShowModal={setOpenModal}>
        <NewCustomer setShowModal={setOpenModal} />
      </Modal>
    </>
  );
};
