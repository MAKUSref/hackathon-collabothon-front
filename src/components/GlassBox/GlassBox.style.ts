import styled from "@emotion/styled";

const BOTTOM = 75;

const StyledBox = styled("div")<{
  transition: boolean;
  height: number;
}>`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filtr: blur(3px);
  width: 80%;
  height: ${(props) => `${props.height}px`};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${BOTTOM}px;
  padding: 20px;
  ${(props) => props.transition && "transition: height 300ms linear"};
  overflow-y: hidden;
`;

const Dash = styled("div")`
  position: relative;
  width: 100%;
  height: 2rem;

  &:after {
    position: absolute;
    content: "";
    width: 100px;
    height: 1px;
    background-color: #fff;
    border-radius: 10%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { StyledBox, Dash };
