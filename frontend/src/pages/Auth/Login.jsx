import "./Login.css";

import BrandSection from "../../components/BrandSection";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const passwordRequirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  function handleLogin(e) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      return;
    }

    if (!passwordRequirements.length) {
      setPasswordError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (!passwordRequirements.uppercase) {
      setPasswordError(
        "Password must contain an uppercase letter."
      );
      return;
    }

    if (!passwordRequirements.lowercase) {
      setPasswordError(
        "Password must contain a lowercase letter."
      );
      return;
    }

    if (!passwordRequirements.number) {
      setPasswordError("Password must contain a number.");
      return;
    }

    if (!passwordRequirements.special) {
      setPasswordError(
        "Password must contain a special character."
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Validation successful!");
    }, 2000);
  }

  return (
    <div className="login-container">
      <BrandSection />

      <div className="login-card">
        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Sign in to your employer account
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value.toLowerCase())
              }
              autoComplete="email"
            />

            {emailError && (
              <p className="error-message">
                {emailError}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="current-password"
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {/* Password Requirements */}
            {password && (
              <div className="password-requirements">
                <p>Password must contain:</p>

                <span
                  className={
                    passwordRequirements.length
                      ? "valid"
                      : ""
                  }
                >
                  {passwordRequirements.length
                    ? "✓"
                    : "○"}{" "}
                  8+ characters
                </span>

                <span
                  className={
                    passwordRequirements.uppercase
                      ? "valid"
                      : ""
                  }
                >
                  {passwordRequirements.uppercase
                    ? "✓"
                    : "○"}{" "}
                  Uppercase letter
                </span>

                <span
                  className={
                    passwordRequirements.lowercase
                      ? "valid"
                      : ""
                  }
                >
                  {passwordRequirements.lowercase
                    ? "✓"
                    : "○"}{" "}
                  Lowercase letter
                </span>

                <span
                  className={
                    passwordRequirements.number
                      ? "valid"
                      : ""
                  }
                >
                  {passwordRequirements.number
                    ? "✓"
                    : "○"}{" "}
                  Number
                </span>

                <span
                  className={
                    passwordRequirements.special
                      ? "valid"
                      : ""
                  }
                >
                  {passwordRequirements.special
                    ? "✓"
                    : "○"}{" "}
                  Special character
                </span>
              </div>
            )}

            {passwordError && (
              <p className="error-message">
                {passwordError}
              </p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span>Remember Me</span>
            </label>

            <Link
              to="/forgot-password"
              className="forgot-password"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;