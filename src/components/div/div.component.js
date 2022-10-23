import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

const DivStyle = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ bg }) => (bg ? bg : "")};
  color: ${({ color }) => (color ? color : colors.text.light)};
  height: ${({ height }) => (height ? height : "")};
  padding: ${({ padding }) => (padding ? padding : "13px")};
  display: ${({ display }) => (display ? display : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  align-items: ${({ align }) => (align ? align : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "")};
  flex: ${({ flex }) => (flex ? flex : "")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "")};
  transition:${({transition})=>transition ? transition : '1s ease-in'};
  @media only screen and (max-width:${({breakPoint})=>breakPoint ? breakPoint :''}) {
    justify-content: ${({ resJustifyContent }) =>resJustifyContent ? resJustifyContent : ""};
  }
`;

export const Div = ({
  children,
  width,
  bg,
  color,
  height,
  padding,
  display,
  direction,
  align,
  justifyContent,
  flex,
  flexBasis,
  flexWrap,
  transition,
  resJustifyContent,
  breakPoint,
}) => {
  return (
    <>
      <DivStyle
        width={width}
        bg={bg}
        color={color}
        height={height}
        padding={padding}
        display={display}
        direction={direction}
        align={align}
        justifyContent={justifyContent}
        flexBasis={flexBasis}
        flex={flex}
        flexWrap={flexWrap}
        transition={transition}
        resJustifyContent={resJustifyContent}
        breakPoint={breakPoint}
      >
        {children}
      </DivStyle>
    </>
  );
};
