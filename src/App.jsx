import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import SignInPage from "pages/SignIn";

function App() {
  return (
    <ProSidebarProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <SignInPage />
      </GoogleOAuthProvider>
    </ProSidebarProvider>
  );
}

export default App;
