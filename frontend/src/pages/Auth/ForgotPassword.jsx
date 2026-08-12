import "./Login.css";
import BrandSection from "../../components/BrandSection";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setEmail(trimmedEmail);
    setLoading(true);

    // Temporary frontend behavior until backend API is provided.
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  }

  return (
    <div className="login-container forgot-password-container">
      <BrandSection />

      <div className="login-card forgot-password-card">
        <h1>Forgot Password?</h1>

        <p className="forgot-password-subtitle">
          Enter your registered email address and we'll help you reset your
          password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="forgot-password-form"
          noValidate
        >
          <div className="forgot-password-field">
            <label htmlFor="forgot-email">Email Address</label>

            <input
              id="forgot-email"
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setSuccess(false);
              }}
            />

            {error && <p className="forgot-error">{error}</p>}
          </div>

          {success && (
            <p className="forgot-success">
              If an account exists with this email, a password reset link will
              be sent.
            </p>
          )}

          <button
            type="submit"
            className="forgot-submit-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <Link to="/" className="back-to-login">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;