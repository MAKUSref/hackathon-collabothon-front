import styled from "@emotion/styled";

const StyledBgContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #1D0093 0.42%, #6038FF 37.39%, #6038FF 40.6%, #8423FF 122.11%);
  z-index: -1;
`;

const StyledContainer = styled("div")`
  padding: 0 10px;
`;

export { StyledBgContainer, StyledContainer };
