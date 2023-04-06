import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `Roboto`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MuiThemeProvider theme={THEME}>
      <GoogleOAuthProvider clientId="255961240003-dovvkshbtf04b0a740qdmnmhasud9hki.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
