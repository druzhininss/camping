import React, { useRef } from 'react';
import { userRegistrationAC } from '../../redux/actionCreators/registrationAC';
import {useDispatch} from 'react-redux';

function Registration() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const phoneRef = useRef();
  const dispatch = useDispatch();
  

  const registerUser = () => {
    return {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      password2: repeatPasswordRef.current.value,
    }
  }

  function userAdd(event) {
    event.preventDefault()
    dispatch(userRegistrationAC(registerUser()))
  }
  return (
    <div>
      <form onSubmit={userAdd} >
        <div>
          <h1>Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr />
          <label htmlFor="username"><b>Ник</b></label>
          <input ref={usernameRef} type="text" placeholder="username" name="username" required />
          <hr />
          <label htmlFor="email"><b>Почта</b></label>
          <input ref={emailRef} type="text" placeholder="Enter Email" name="email" required />
          <hr />
          <label htmlFor="phone_number"><b>Телефон</b></label>
          <input ref={phoneRef}type="tel" name="phone_number" list="tel-list" placeholder="+7 (900) 123-45-67" />
          <hr />
          <label htmlFor="psw"><b>Пароль</b></label>
          <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required />
          <hr />
          <label htmlFor="psw2"><b>Повторите пароль</b></label>
          <input ref={repeatPasswordRef} type="password" placeholder="Repeat Password" name="psw2" required />
          <hr />
          <button type='submit'>Register</button>
        </div>
        <div >
          <p>Already have an account? <a href="login">Sign in</a>.</p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
