import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogoSup from "./Components/LogoSupLogin";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-bvz8tnrs.us.auth0.com'
    clientId='WXCWbH5EptZ9D26wTACqBKsfQOfN5M7w'
    redirectUri= {window.location.origin}>
      <div>
        <LogoSup />
      </div>,
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
