import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <GoogleOAuthProvider clientId="293399590853-0d34c55cvjnenkr8qbqtftrnkdp8193d.apps.googleusercontent.com">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="auth/" exact element={<Auth />} />
        </Routes>
      </GoogleOAuthProvider>
    </Container>
  </BrowserRouter>
);

export default App;
