import styled from "@emotion/styled";

const BOTTOM = 110;

const StyledBox = styled("div")<{
  transition: boolean;
  height: number;
}>`
  background: linear-gradient(
    149deg,
    rgba(255, 255, 255, 0.07) 8.34%,
    rgba(255, 255, 255, 0.16) 83.92%
  );
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 10px 5px 24px -1px rgba(173, 173, 173, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filtr: blur(3px);
  width: 90%;
  height: ${(props) => `${props.height}px`};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${BOTTOM}px;
  ${(props) => props.transition && "transition: height 300ms linear"}
`;

const Dash = styled("div")`
  position: relative;
  width: 100%;
  height: 21px;
  margin-top: 10px;
  margin-bottom: 10px;

  &:after {
    position: absolute;
    content: "";
    width: 42px;
    height: 4px;
    background-color: #fff;
    border-radius: 50px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Content = styled("div")<{ height: number }>`
  overflow-y: auto;
  width: 100%;
  height: ${(props) => `${props.height - 50}px`};
  padding: 0 21px 21px 21px;
  font-size: 14px;
`;

export { StyledBox, Dash, Content };
