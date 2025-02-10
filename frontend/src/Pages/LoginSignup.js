
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Container,
  SignUpContainer,
  SignInContainer,
  OverlayContainer,
  Overlay,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  Paragraph,
  LeftOverlayPanel,
  RightOverlayPanel
} from "./components/ui/AnimationComponents";
import { handleError, handleSuccess } from "../utils";
import './LoginSignup.css';
import { Box } from '@mui/material';

function LoginSignup() {
  const [signIn, setSignIn] = useState(true); // Toggle between Login and Signup
  const navigate = useNavigate();

  // Common Form States
  const [formInfo, setFormInfo] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formInfo;
    if (!email || !password) {
      return handleError("Email and password are required.");
    }
    try {
      const response = await fetch("https://deployed-react-app-backend.vercel.app/authentication/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error,userId } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        localStorage.setItem("userId", userId);
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = formInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required.");
    }
    try {
      const response = await fetch("https://deployed-react-app-backend.vercel.app/authentication/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height of the viewport
        m: "auto",
        padding: "0 20px",
      }}
    >
      <Container>
        <SignUpContainer signinIn={signIn}>
          <Form onSubmit={handleSignup}>
            <Title>Create Account</Title>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formInfo.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formInfo.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formInfo.password}
              onChange={handleChange}
            />
            <Button type="submit">Sign Up</Button>
          </Form>
        </SignUpContainer>

        <SignInContainer signinIn={signIn}>
          <Form onSubmit={handleLogin}>
            <Title>Sign In</Title>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formInfo.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formInfo.password}
              onChange={handleChange}
            />
            <Button type="submit">Sign In</Button>
          </Form>
        </SignInContainer>

        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <LeftOverlayPanel signinIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph>
                To keep connected with us, please login with your personal info
              </Paragraph>
              <GhostButton onClick={() => setSignIn(true)}>Sign In</GhostButton>
            </LeftOverlayPanel>
            <RightOverlayPanel signinIn={signIn}>
              <Title>Hello, Friend!</Title>
              <Paragraph>
                Enter your details and start your journey with us
              </Paragraph>
              <GhostButton onClick={() => setSignIn(false)}>Sign Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
        <ToastContainer />
      </Container>
    </Box>
  );
}

export default LoginSignup;
