import React, { useState } from 'react';
import './Login.css';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // 서버의 세션을 사용하기 위해 credentials 옵션을 include로 설정합니다.
      });

      if (response.ok) {
        // 인증 성공 시
        const returnMsg = await response.text();
        //alert(returnMsg);
        if (returnMsg === 'OK'){
            onLogin(); // 로그인 성공 시 부모 컴포넌트에서 처리할 작업을 호출합니다.
        }else{
        throw new Error('Invalid credentials');
        } 
      } else {
        // 인증 실패 시
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="login-button" onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;

