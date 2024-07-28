import frsignup from '../../../assets/frsignup.jpeg'   
import Nav from '../../../components/Navbar.jsx'
import Footer from '../../../components/Footer.jsx'
import './Sign_up.css'

const Sign_up = () => {
  return (
    <>
    <Nav /> 
    <div className="signup-container">
      <div className="image-container">
        <img src={frsignup} alt="Sign Up" />
      </div>
      <div className="form-container2">
        <form>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Gender *</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="female" required />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="male" required />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="other" required />
                Other
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password *</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember"> Remember me</label>
          </div>
          <button type="submit">SIGN UP</button>
          <div className="additional-options">
            <span>Already have an account? <a href="/signin">Sign In</a></span>
          </div>
          <p>Copyright © harmoni 2024.</p>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Sign_up;