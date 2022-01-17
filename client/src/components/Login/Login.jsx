import React from 'react';

function Login() {
  return (
    <div>
      <htmlForm> 
        <div>
          <h1>Вход</h1>
          <hr/>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required /> 
          <hr/>
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <hr />
          <button>Войти</button>
        </div>
          <div >
            <p>Еще нет аккаунта? <a href="/registration">Зарегистрируйтесь</a></p>
          </div>
      </htmlForm>
    </div>
  );
}

export default Login;
