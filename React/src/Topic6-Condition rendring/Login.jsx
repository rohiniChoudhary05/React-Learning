
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back!</h1>
        <p className="subtitle">Please login to your account</p>

        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
          Don't have an account? <a href="#signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
