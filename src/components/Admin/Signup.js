import { useState } from "react";
import { signUser } from "../../utils/fetch";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function storeInfos(e) {
    e.preventDefault();
    localStorage.setItem(email, password);
    signUser({ email, password });
  }

  return (
    <form onSubmit={(e) => storeInfos(e)} className="form-login">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      ></input>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <button type="submit">Inscription</button>
    </form>
  );
}

export default Signup;
