// src/App.jsx
import { useState } from "react";
import LoginPage from "./LoginPage";
import MainMenu from "./MainMenu";

function App() {
  const [user, setUser] = useState(null);

  return <>{!user ? <LoginPage onLogin={setUser} /> : <MainMenu user={user} />}</>;
}

export default App;
