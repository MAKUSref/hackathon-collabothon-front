import { useEffect } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/session/sessionSlice";
import { useNavigate } from "react-router";
import { Box, Stack, Typography } from "@mui/material";
import logoSvg from "../../assets/logo.svg";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import { useAppSelector } from "../../redux/hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.session.token);

  const handleOnSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    console.log(credentialResponse);

    dispatch(setToken(credential ?? ""));

    navigate("/");
  };

  const handleOnError = () => {
    console.log("login failed");
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  return (
    <Stack justifyContent="center" height="100vh">
      <Stack>
        <Stack direction="row" mb={4} justifyContent="center">
          <img src={logoSvg} />
        </Stack>
        <Box my={2}>
          <Logo size="l" />
        </Box>
        <Typography variant="body1" px={8} textAlign="center" mb={16}>
          Collect Carbon Credits from eco-frindly activieties and donate them to{" "}
          <strong>Global Goals</strong>
        </Typography>
        <Stack direction="row" justifyContent="center">
          <GoogleLogin
            containerProps={{ style: { padding: "20px" } }}
            shape="pill"
            theme="filled_blue"
            size="large"
            width="341px"
            onSuccess={handleOnSuccess}
            onError={handleOnError}
          />
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Login;
