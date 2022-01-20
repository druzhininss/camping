import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

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
    <div>
      <form>
        <div>
          <h1>Войдите как админ</h1>
          <p>Пожалуйста, заполните эту форму, чтобы войти под учетной записью админимтратора.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input ref={email} type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input ref={password} type="password" placeholder="Enter Password" name="psword" required />
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <div>
            <button type="submit" onClick={(event) => {
              event.preventDefault();
              dispatch({ type: "LOGIN_ADMIN_SAGA", payload: loginAdminObj() });
            }
            } >Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminPanelLogin;
