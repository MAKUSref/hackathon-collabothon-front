import styled from "@emotion/styled";
import bgImage from "../../assets/bg.png";

const StyledBgContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

export { StyledBgContainer };
