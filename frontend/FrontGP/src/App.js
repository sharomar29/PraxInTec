
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Login from "./Pages/Public/Authentication";


function App() {
  return (
    <Auth0Provider
                  domain="dev-bvz8tnrs.us.auth0.com"
                  clientId="WXCWbH5EptZ9D26wTACqBKsfQOfN5M7w"
                  redirectUri={window.location.origin}>
                    <App />
      </Auth0Provider>
  );
}

export default App;
