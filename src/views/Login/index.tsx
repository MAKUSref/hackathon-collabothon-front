import { GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/session/sessionSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const { credential } = credentialResponse;

        dispatch(setToken(credential ?? ""));

        navigate("/");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Login;
