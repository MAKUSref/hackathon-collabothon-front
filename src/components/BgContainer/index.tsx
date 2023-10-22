import { PropsWithChildren } from "react";
import { StyledBgContainer } from "./BgContainer.style";

const BgContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyledBgContainer />
      {children}
    </>
  );
};

export default BgContainer;
