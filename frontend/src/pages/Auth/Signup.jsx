import "./Login.css";

import BrandSection from "../../components/BrandSection";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const [companyName, setCompanyName] = useState("");
  const [hrName, setHrName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [companyError, setCompanyError] = useState("");
  const [hrError, setHrError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordRequirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const isPasswordValid =
    passwordRequirements.length &&
    passwordRequirements.uppercase &&
    passwordRequirements.lowercase &&
    passwordRequirements.number &&
    passwordRequirements.special;

  function handleSignup(e) {
    e.preventDefault();

    setCompanyError("");
    setHrError("");
    setEmailError("");
    setPasswordError("");
    setSuccess(false);

    const trimmedCompanyName = companyName.trim();
    const trimmedHrName = hrName.trim();
    const trimmedEmail = email.trim().toLowerCase();

    // Company Name validation
    if (!trimmedCompanyName) {
      setCompanyError("Please enter your company name.");
      return;
    }

    // HR Name validation
    if (!trimmedHrName) {
      setHrError("Please enter the HR name.");
      return;
    }

    // Email validation
    if (!trimmedEmail) {
      setEmailError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError("Please create a password.");
      return;
    }

    if (!passwordRequirements.length) {
      setPasswordError("Password must contain at least 8 characters.");
      return;
    }

    if (!passwordRequirements.uppercase) {
      setPasswordError("Password must contain an uppercase letter.");
      return;
    }

    if (!passwordRequirements.lowercase) {
      setPasswordError("Password must contain a lowercase letter.");
      return;
    }

    if (!passwordRequirements.number) {
      setPasswordError("Password must contain a number.");
      return;
    }

    if (!passwordRequirements.special) {
      setPasswordError("Password must contain a special character.");
      return;
    }

    // Temporary frontend behavior until backend API is connected
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setCompanyName(trimmedCompanyName);
      setHrName(trimmedHrName);
      setEmail(trimmedEmail);
    }, 1200);
  }

  return (
    <div className="login-container signup-container">
      <BrandSection />

      <div className="login-card signup-card">
        <h1>Create Account</h1>

        <p className="login-subtitle">
          Create your employer account
        </p>

        <form onSubmit={handleSignup} className="signup-form">
          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="company-name">Company Name</label>

            <input
              id="company-name"
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setCompanyError("");
                setSuccess(false);
              }}
            />

            {companyError && (
              <p className="error-message">{companyError}</p>
            )}
          </div>

          {/* HR Name */}
          <div className="form-group">
            <label htmlFor="hr-name">HR Name</label>

            <input
              id="hr-name"
              type="text"
              placeholder="Enter HR name"
              value={hrName}
              onChange={(e) => {
                setHrName(e.target.value);
                setHrError("");
                setSuccess(false);
              }}
            />

            {hrError && (
              <p className="error-message">{hrError}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="signup-email">Email Address</label>

            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
                setSuccess(false);
              }}
            />

            {emailError && (
              <p className="error-message">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="signup-password">Create Password</label>

            <div className="password-field">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                  setSuccess(false);
                }}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Password Requirements */}
            {password && (
              <div className="password-requirements signup-password-requirements">
                <p>Password must contain:</p>

                <span
                  className={
                    passwordRequirements.length ? "valid" : ""
                  }
                >
                  {passwordRequirements.length ? "✓" : "○"} 8+ characters
                </span>

                <span
                  className={
                    passwordRequirements.uppercase ? "valid" : ""
                  }
                >
                  {passwordRequirements.uppercase ? "✓" : "○"} Uppercase
                  letter
                </span>

                <span
                  className={
                    passwordRequirements.lowercase ? "valid" : ""
                  }
                >
                  {passwordRequirements.lowercase ? "✓" : "○"} Lowercase
                  letter
                </span>

                <span
                  className={
                    passwordRequirements.number ? "valid" : ""
                  }
                >
                  {passwordRequirements.number ? "✓" : "○"} Number
                </span>

                <span
                  className={
                    passwordRequirements.special ? "valid" : ""
                  }
                >
                  {passwordRequirements.special ? "✓" : "○"} Special
                  character
                </span>
              </div>
            )}

            {passwordError && (
              <p className="error-message">{passwordError}</p>
            )}
          </div>

          {/* Success Message */}
          {success && (
            <p className="signup-success">
              Account Created Successfully!
              Welcome to JobCare. Your employer account has been created successfully.
            </p>
          )}

          {/* Create Account Button */}
          <button
            type="submit"
            className="login-button signup-button"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="signup-login-text">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;