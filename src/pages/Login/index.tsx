// pages/Login.tsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Facebook from "/facebook.svg";
import Google from "/google.svg";
import Github from "/github.svg";
import styles from './Login.module.css';

type FormData = {
 
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = ({  email, password }: FormData) => {
    if (email === 'natavaz02@gmail.com' && password === '123') {
      localStorage.setItem("auth", "true");
      navigate("/board");
    } else {
      alert("Nome, email ou senha incorretos.");
    }
  };

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

        <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs}>
          {/* <div className={styles.inputBox}>
            <label htmlFor="name">
              Name
              <div className={styles.inputField}>
                <i className="fa-solid fa-user"></i>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Nome é obrigatório" })}
                />
              </div>
              {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
            </label>
          </div> */}

          <div className={styles.inputBox}>
            <label htmlFor="email">
              E-mail
              <div className={styles.inputField}>
                <i className="fa-solid fa-envelope"></i>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: {   
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "E-mail inválido"
                    }
                  })}
                />
              </div>
              {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
            </label>
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="password">
              Password
              <div className={styles.inputField}>
                <i className="fa-solid fa-key"></i>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Senha é obrigatória",
                    minLength: { value: 3, message: "Mínimo de 3 caracteres" }
                  })}
                />
              </div>
              {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
              <div className={styles.forgot_password}>
                <a href="#">Forgot your password?</a>
              </div>
            </label>
          </div>

          <button className={styles.loginButton}>
            Login
          </button>
          <a className={styles.cadastroLogin} href="/cadastro">Criar Conta</a>
        </form>
      </div>
    </main>
  );
}

export default Login;
