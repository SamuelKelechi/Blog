import React, { useState } from "react";

const PasswordProtect = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const correctPassword ="ossayeadmin_2025";

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div style={styles.container}>
    <h1 style={styles.header}>Enter Password to Access the Blog</h1>
    <div style={styles.inputContainer}>
      <input
        type={showPassword ? "text" : "password"} // Toggle between text and password
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)} // Toggle visibility
        style={styles.toggleButton}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
    <button onClick={handleLogin} style={styles.button}>
      Submit
    </button>
    {/* Display error message */}
    {error && <p style={styles.error}>{error}</p>}
  </div>
);
};

const styles = {
container: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  textAlign : "center",
},
header: {
  fontSize: "24px",
  width: "80%"
},
inputContainer: {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
},
input: {
  padding: "10px",
  fontSize: "16px",
  marginRight: "10px",
},
toggleButton: {
  padding: "10px",
  fontSize: "14px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
},
button: {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
},
error: {
  color: "red",
  marginTop: "10px",
  fontSize: "14px",
},
};

export default PasswordProtect;