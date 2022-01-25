import React, { useEffect, useRef } from 'react';
import { userRegistrationAC } from '../../redux/actionCreators/registrationAC';
import { useDispatch, useSelector } from 'react-redux';
import style from './Registration.module.css';
import { Redirect } from 'react-router-dom';
import { clearErrorsAC } from '../../redux/actionCreators/loginAC';


function Registration() {
  const registrationStatus = useSelector(state => state.userReducer);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const phoneRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearErrorsAC())
  }, [])

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
    event.preventDefault();
    dispatch(userRegistrationAC(registerUser()));
  }
  return (
    <form onSubmit={userAdd} className={style.formHeight}>
      <h1>Регистрация</h1>
      <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
      <hr />
      <div className={style.form} >

        <div className="mb-3 d-flex flex-column">
          <label htmlFor="username" className="form-label">Ваше имя</label>
          <input className={style.form_input} ref={usernameRef} type="text" placeholder="Введите ваше имя" name="username" required />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="email" className="form-label">Почта</label>
          <input className={style.form_input} ref={emailRef} type="text" placeholder="Введите адрес вашей почты" name="email" required />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="phone_number" className="form-label">Телефон</label>
          <input className={style.form_input} ref={phoneRef} type="tel" name="phone_number" list="tel-list" placeholder="+7 (900) 123-45-67" />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="psw" className="form-label">Пароль</label>
          <input className={style.form_input} ref={passwordRef} type="password" minLength={8} placeholder="Введите пароль" name="psw" required />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="psw2" className="form-label">Повторите пароль</label>
          <input className={style.form_input} ref={repeatPasswordRef} type="password" placeholder="Введите пароль" name="psw2" required />
        </div>

        {registrationStatus?.message
          ?
          <p style={{ fontSize: '0.7rem', color: 'red' }}>{registrationStatus.message}</p>
          :
          registrationStatus?.login && <Redirect to='/' />
        }

        <button type='submit'>Регистрация</button>
      </div>
      <hr />
      <div >
        <p>Уже есть аккаунт? <a href="login">Войдите</a>.</p>
      </div>
    </form>
  );
}

export default Registration;
