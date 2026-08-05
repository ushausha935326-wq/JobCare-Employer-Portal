import "./Login.css";
import BrandSection from "../../components/BrandSection";

function ForgotPassword() {
  return (
    <div className="login-container">
      <BrandSection />

      <div className="login-card">
        <h1>Forgot Password</h1>

        <p>Enter your email to reset your password</p>

        <form>
          <input
            type="email"
            placeholder="Enter your registered email"
          />

          <button type="submit">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;