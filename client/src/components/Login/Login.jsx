import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAC } from '../../redux/actionCreators/loginAC'
import style from './Login.module.css';

function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const userStatus = useSelector(state => state.userReducer);

  const getLoginData = () => {
    return {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        dispatch(userLoginAC(getLoginData())); // useHistory
        if (userStatus?.login) {
          history.push('/');
        }
      }}>
        <h1>Вход</h1>
        <hr />
        <div className={style.form} >
          <div className="mb-3 d-flex flex-column">
            <label className="form-label">Email</label>
            <input ref={emailRef} type="text" placeholder="Enter Email" name="email" required />
          </div>
          <div className="mb-3 d-flex flex-column">
            <label className="form-label">Password</label>
            <input ref={passwordRef} type="password" minLength={8} placeholder="Enter Password" name="password" required />
          </div>

          {
            userStatus?.message
            &&
            <p style={{ fontSize: '0.7rem', color: 'red' }}>{userStatus.message}</p>
          }

          <button>Войти</button>
        </div>
        <hr />
        <div>
          <p>Еще нет аккаунта? <a href="/registration">Зарегистрируйтесь</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
