import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/session/sessionSlice";
import { useNavigate } from "react-router";
import { Box, Stack, Typography } from "@mui/material";
import logoSvg from "../../assets/logo.svg";
import Logo from "../../components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    console.log(credentialResponse);
    
    dispatch(setToken(credential ?? ""));

    navigate("/");
  };

  const handleOnError = () => {
    console.log("login failed");
  };

  return (
    <Stack>
      <Box>
        <img src={logoSvg} />
      </Box>

      <Logo />

      <Typography>
        Collect Carbon Credits from eco-frindly activieties and donate them to Global Goals
      </Typography>

      <GoogleLogin onSuccess={handleOnSuccess} onError={handleOnError} />
    </Stack>
  );
};

export default Login;
