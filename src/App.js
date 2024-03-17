import React, { useState } from 'react';
import Login from './Login';
import NewsList from './NewsList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 로그인 처리를 여기에 추가하세요
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <NewsList />
      )}
    </div>
  );
}

export default App;

