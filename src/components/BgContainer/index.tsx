import { PropsWithChildren } from "react";
import { StyledBgContainer, StyledContainer } from "./BgContainer.style";

const BgContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyledBgContainer />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default BgContainer;
