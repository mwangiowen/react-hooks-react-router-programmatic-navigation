import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const formContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff",
  maxWidth: "300px", // Limit the width of the form container
  margin: "0 auto", // Center the form container horizontally
};

const inputStyles = {
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyles = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  margin: "10px 0", // Add margin to space out the button
};

const buttonStylesHover = {
  backgroundColor: "#0056b3",
};

function Login({ onLogin }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate login logic
    // Replace this with your actual login request
    if (formData.username === "user" && formData.password === "password") {
      onLogin({ username: formData.username });
      history.push("/");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={formContainerStyles}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} style={inputStyles} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyles} />
      </div>
      <button type="submit" style={buttonStyles} onMouseEnter={() => (buttonStyles.background = buttonStylesHover.backgroundColor)} onMouseLeave={() => (buttonStyles.background = buttonStyles.backgroundColor)}>Login</button>
    </form>
  );
}

export default Login;
