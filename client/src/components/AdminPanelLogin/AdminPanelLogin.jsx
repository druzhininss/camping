import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import style from './AdminPanelLogin.module.css';

function AdminPanelLogin() {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  function loginAdminObj() {
    return {
      email: email.current.value,
      password: password.current.value,
    }
  }



  return (
    <>
        <form className={style.transparent}>
          <div className={style.form_inner}>
            <h3>Вход</h3>
            <input ref={email} type="text" id="username" placeholder='e-mail'></input>
            <input id="password" type="password" placeholder='Password'></input>
            <input ref={password} type="checkbox" id={style.custom_checkbox}></input>
            <input type="submit" value="Отправить"
              onClick={(event) => {
                event.preventDefault()
                dispatch({ type: "LOGIN_ADMIN_SAGA", payload: loginAdminObj() })}
                }></input>
          </div>
        </ form>
    </>
  );
}

export default AdminPanelLogin;
