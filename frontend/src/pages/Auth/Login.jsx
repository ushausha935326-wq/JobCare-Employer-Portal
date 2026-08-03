import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>JobCare</h1>

        <h2>Connecting Talent.</h2>

        <h2>Creating Opportunities.</h2>

        <p>
         India's trusted platform connecting employers with skilled blue-collar
         workers.
        </p>
      </div>
      <div className="login-card">
        <h1>Welcome Back!</h1>

        <p>Sign in to your employer account</p>

        <form>
          <input type="email" placeholder="Enter your email" />

          <input type="password" placeholder="Enter your password" />

          
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit">Login</button>
        </form>

        <p className="forgot-password">Forgot Password?</p>
        <p className="signup-text">
            Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;