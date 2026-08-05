import "./Login.css";
import BrandSection from "../../components/BrandSection";
function Signup() {
  return (
    <div className="login-container">
      <BrandSection />
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