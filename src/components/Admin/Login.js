import { useState } from "react";
import { logUser } from "../../utils/fetch";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function storeInfos(e) {
    e.preventDefault(e);
    logUser({ email, password }, setAuth);
  }

  return (
    <div className="login-container">
      <form onSubmit={(e) => storeInfos(e)} className="form-login">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <button type="submit">CONNEXION</button>
      </form>
    </div>
  );
}

export default Login;
