import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLoginAC } from '../../redux/actionCreators/loginAC'

function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

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
        dispatch(userLoginAC(getLoginData())); //useEffect ? and useHistory
        history.push('/')
        
      }}> 
        <div>
          <h1>Вход</h1>
          <hr/>
          <label htmlFor="email"><b>Email</b></label>
          <input ref={emailRef} type="text" placeholder="Enter Email" name="email" required /> 
          <hr/>
          <label htmlFor="psw"><b>Password</b></label>
          <input ref={passwordRef} type="password" placeholder="Enter Password" name="password" required />
          <hr />
          <button>Войти</button>
        </div>
          <div >
            <p>Еще нет аккаунта? <a href="/registration">Зарегистрируйтесь</a></p>
          </div>
      </form>
    </div>
  );
}

export default Login;
