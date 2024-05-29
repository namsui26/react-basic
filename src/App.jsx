import { useState } from "react";

function App() {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	
	const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인:</label>
        <input
          type="password"
          id="passwordConfirm"
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default App;
