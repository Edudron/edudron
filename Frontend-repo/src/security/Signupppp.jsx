import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "./AuthContext";
import { Container } from "react-bootstrap"; // <-- Import the Container component from react-bootstrap


export default function Signupppp() {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-item-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div classname="w-100 " style={{ maxWidth: "400px" }}>
            <Signup />
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}
