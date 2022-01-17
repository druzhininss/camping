import React, { useRef } from 'react';
import { userRegistrationAC } from '../../redux/actionCreators/registrationAC';

function Registration() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const phoneRef = useRef();
  

  const registerUser = () => {
    return {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,

    }
  }
  return (
    <div>
      <htmlForm onSubmit={() => userRegistrationAC(registerUser())}>
        <div>
          <h1>Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr />
          <label htmlFor="username"><b>Username</b></label>
          <input ref={usernameRef} type="text" placeholder="username" name="username" required />
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input ref={emailRef} type="text" placeholder="Enter Email" name="email" required />
          <hr />
          <p><input ref={phoneRef}type="tel" name="phone_number" list="tel-list" placeholder="+7 (900) 123-45-67" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" /></p>
          <hr />
          <label htmlFor="psw"><b>Password</b></label>
          <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required />
          <hr />
          <label htmlFor="psw2"><b>Repeat-Password</b></label>
          <input ref={repeatPasswordRef} type="password" placeholder="Repeat Password" name="psw2" required />
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type='submit'>Register</button>
        </div>
        <div >
          <p>Already have an account? <a href="login">Sign in</a>.</p>
        </div>
      </htmlForm>
    </div>
  );
}

export default Registration;
