import "./style.css";
import LOGO_IMG from "../../assets/logo.svg";
import { useMemo, useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";
import PATHS from "../../router/paths";
import steps from "./steps";
import Dot from "./StepDot";
import { StyledContainer } from "../../components/BgContainer/BgContainer.style";

const Welcome = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = useMemo(() => steps[stepIndex], [stepIndex]);
  const isNextStep = useMemo(() => stepIndex + 1 < steps.length, [stepIndex]);
  const isPrevStep = useMemo(() => stepIndex > 0, [stepIndex]);
  const navigate = useNavigate();

  const nextStep = () => {
    if (!isNextStep) {
      navigate(PATHS.HOME);
      return;
    }
    setStepIndex((prev) => prev + 1);
  };

  const prevStep = () => {
    if (!isPrevStep) return;
    setStepIndex((prev) => prev - 1);
  };

  return (
    <StyledContainer>
      <Stack alignItems="center" height="100vh" justifyContent="space-between">
        <Stack alignItems="center" className="step">
          <Stack
            gap={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
            mt={3}
            mb={40}
          >
            <img src={LOGO_IMG} width="40px" />
            <Typography justifySelf="center" variant="h4">
              Carbbyn
            </Typography>
          </Stack>
          <img src={step.img} height="400px" className="img" />
          <Typography variant="h6" mt={6} mb={2} textAlign="center">
            {step.title}
          </Typography>
          <Typography variant="body1" mx={4} textAlign="center">
            {step.description}
          </Typography>
        </Stack>
        <Stack
          mb={15}
          px={2}
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          <IconButton onClick={prevStep} sx={{ opacity: isPrevStep ? 1 : 0 }}>
            <ArrowBackRoundedIcon />
          </IconButton>
          <Stack direction="row" alignItems="center" gap={2}>
            <Dot isActive={stepIndex === 0} />
            <Dot isActive={stepIndex === 1} />
            <Dot isActive={stepIndex === 2} />
          </Stack>
          <IconButton onClick={nextStep}>
            <ArrowForwardRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </StyledContainer>
  );
};

export default Welcome;
