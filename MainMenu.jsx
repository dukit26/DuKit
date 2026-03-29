// src/MainMenu.jsx
import { useState, useEffect } from "react";

export default function MainMenu({ user }) {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "Kits", "Join Game"];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          Du<span style={styles.logoSpan}>Kit</span>
        </div>
        <nav style={styles.nav}>
          {tabs.map((tab) => (
            <div
              key={tab}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab} {activeTab === tab && "🦆"}
            </div>
          ))}
        </nav>
        <div>{user.email}</div>
      </header>

      <div style={styles.main}>
        {activeTab === "Home" && "Welcome to DuKit Home!"}
        {activeTab === "Kits" && "Here are your Kits."}
        {activeTab === "Join Game" && "Enter a game code to join."}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter, sans-serif",
    background: "linear-gradient(160deg, #4fb3ff, #ffe066)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  logo: { fontSize: "24px", fontWeight: "700" },
  logoSpan: {
    background: "#fff",
    padding: "3px 10px",
    borderRadius: "6px",
    marginLeft: "5px",
  },
  nav: { display: "flex", gap: "20px" },
  tab: {
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: 8,
    transition: "background 0.2s",
  },
  activeTab: {
    background: "#4fb3ff",
    color: "white",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: 600,
    color: "#111",
    textAlign: "center",
    padding: 20,
  },
};
