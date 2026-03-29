// src/LoginPage.jsx
import { useState, useEffect } from "react";

export default function LoginPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  // Load saved email/username
  useEffect(() => {
    const savedEmail = localStorage.getItem("dukitemail");
    const savedUsername = localStorage.getItem("dukusername");
    if (savedEmail) setEmail(savedEmail);
    if (savedUsername) setUsername(savedUsername);
  }, []);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = () => {
    if (!email) return alert("Enter your email");
    if (!isLogin && !username) return alert("Enter a username");

    localStorage.setItem("dukitemail", email);
    if (!isLogin) localStorage.setItem("dukusername", username);

    onLogin({ email, username: isLogin ? username || email : username });
  };

  return (
    <div style={styles.container}>
      {/* LEFT */}
      <div style={styles.left}>
        <div style={styles.logo}>
          Du<span style={styles.logoSpan}>Kit</span>
        </div>
        <div>
          <div style={styles.hero}>Get A Little Quack In Your Life</div>
          <div style={styles.duck}>🦆</div>
        </div>
        <div style={styles.footer}>DuKit World</div>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <div style={styles.formBox}>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          )}
          <button onClick={handleSubmit} style={styles.button}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          <div onClick={toggleMode} style={styles.toggle}>
            {isLogin ? (
              <>New here? <span style={styles.toggleSpan}>Create account</span></>
            ) : (
              <>Already have an account? <span style={styles.toggleSpan}>Login</span></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  left: {
    width: "45%",
    background: "linear-gradient(160deg, #4fb3ff, #ffe066)",
    color: "#1a1a1a",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: { fontSize: "24px", fontWeight: "700" },
  logoSpan: {
    background: "#fff",
    padding: "3px 10px",
    borderRadius: "6px",
    marginLeft: "5px",
  },
  hero: { fontSize: "32px", fontWeight: "600", maxWidth: "300px", lineHeight: 1.3 },
  duck: { fontSize: "60px", marginTop: "20px" },
  footer: { fontSize: "13px" },
  right: {
    width: "55%",
    background: "#f9fafb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: { width: "320px" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    background: "white",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#4fb3ff",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "5px",
  },
  toggle: { marginTop: "15px", fontSize: "14px", color: "#555", cursor: "pointer" },
  toggleSpan: { color: "#4fb3ff", fontWeight: 600 },
};
