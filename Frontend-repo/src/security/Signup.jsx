import React, {useRef} from "react";
import { Form, Button, Card } from "react-bootstrap";
import style from "./Signup.module.css";
import {useAuth} from './AuthContext'

function Signup () {
   const emailRef = useRef();
   const passwordRef = useRef();
   const confirmPasswordRef = useRef();
   const {signup } = useAuth();

   function handleSubmit(e) {
    e.preventDefault()

    signup(emailRef.current.value, passwordRef.current.value)
   }

  return (
    <>
       

      <Card className= {style.my-4 }   >
        <Card.Body className="w-100" >
          <h2 classname="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group className="w-100" id="passwordConfirm">
              <Form.Label >Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={confirmPasswordRef}
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2 ">
        Alreay have an Account ? <a href="/login">Login</a>
      </div>
    </>
  );
}

export default Signup;
