import { RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import router from '../router';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeProvider } from '@mui/material';
import theme from '../theme/theme';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="168441896086-1u2jequdkfnffl9htp2ev5j3h29b1h4s.apps.googleusercontent.com">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
