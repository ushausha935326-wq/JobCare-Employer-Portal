import "./Login.css";

import BrandSection from "../../components/BrandSection";
import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function handleLogin(e) {
  e.preventDefault();

  if (!email.trim()) {
    setError("Please enter your email.");
    return;
  }

  if (!password.trim()) {
    setError("Please enter your password.");
    return;
  }

  setError("");
  alert("Validation successful!");
}
  return (
    <div className="login-container">
      <BrandSection />
      <div className="login-card">
        <h1>Welcome Back!</h1>

        <p>Sign in to your employer account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit">Login</button>
        </form>

        <Link to="/forgot-password" className="forgot-password">
           Forgot Password?
        </Link>
        <p className="signup-text">
           Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;