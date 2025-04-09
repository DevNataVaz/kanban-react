// pages/Login.tsx
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Facebook from "/facebook.svg"
import Google from "/google.svg"
import Github from "/github.svg"
import styles from './Login.module.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();



  const login = (e: React.FormEvent) => {
    e.preventDefault();

    if (name == 'nata' && email == 'natavaz02@gmail.com' && password == '123') {
      setError('');
      localStorage.setItem("auth", "true");
      setIsLogin(true);

      navigate("/");
    } else {
      setError('Nome, Email e senhas incorretos');
      setIsLogin(false);
    }

  }

  // if (isLogin) {
  //   return (
  //     navigate("/")
  //   )
  // }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Login</h1>
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className={styles.containerLinks}>
          <a href="/"><img src={Facebook} alt="facebook logo" /></a>
          <a href="/"><img src={Google} alt="google logo" /></a>
          <a href="/"><img src={Github} alt="github logo" /></a>
        </div>

        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

        <div className={styles.inputs}>
          <div className={styles.inputBox}>
            <label htmlFor="name">
              Name
              <div className={styles.inputField}>
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </label>
          </div>


          <div className={styles.inputBox}>
            <label htmlFor="email">
              E-mail
              <div className={styles.inputField}>
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
          </div>


          <div className={styles.inputBox}>
            <label htmlFor="password">
              Password
              <div className={styles.inputField}>
                <i className="fa-solid fa-key"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>


            <div className={styles.forgot_password}>
              <a href="#">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>


        <button
          type="submit"
          className={styles.login_button}
          onClick={login}>

          Login
        </button>
      </div>
    </main>
  );
}


export default Login;
