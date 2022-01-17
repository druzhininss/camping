import React from 'react';

function Registration() {
  return (
    <div>
      <htmlForm> 
        <div>
          <h1>Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr/>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <hr/>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <hr/> 
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" >Register</button>
        </div>
          <div >
            <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
      </htmlForm>
    </div>
  );
}

export default Registration;
