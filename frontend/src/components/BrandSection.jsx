import logo from "../assets/images/jobcare-logo.png";

function BrandSection() {
  return (
    <div className="login-left">
      <img src={logo} alt="JobCare Logo" className="jobcare-logo" />

      <h1>JobCare</h1>

      <h2>Connecting Talent.</h2>

      <h2>Creating Opportunities.</h2>

      <p>
        India's trusted platform connecting employers with skilled blue-collar
        workers.
      </p>
    </div>
  );
}

export default BrandSection;