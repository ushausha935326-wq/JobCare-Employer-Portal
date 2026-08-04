import "./Login.css";

function Signup() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src={new URL("../../assets/images/jobcare-logo.png", import.meta.url).href}
          alt="JobCare Logo"
          className="jobcare-logo"
        />

        <h1>JobCare</h1>

        <h2>Connecting Talent.</h2>

        <h2>Creating Opportunities.</h2>

        <p>
          India's trusted platform connecting employers with skilled blue-collar
          workers.
        </p>
      </div>
      <div className="login-card">
            <h1>Create Account</h1>

            <p>Create your employer account</p>

            <form>
                <input type="text" placeholder="Company Name" />

                <input type="text" placeholder="HR Name" />

                <input type="email" placeholder="Email Address" />

                <input type="password" placeholder="Create Password" />

                <button type="submit">Create Account</button>
            </form>
        </div>
    </div>
  );
}

export default Signup;