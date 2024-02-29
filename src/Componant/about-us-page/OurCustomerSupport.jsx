import "../Style/about-us-style/aboutUsGeneral.css";
import "../Style/about-us-style/AboutAllSection.css";
import contactUs from "../../assets/aboutUSPecture/Contact_us_hero.webp"
function OurCustomerSupport() {
  return (
    <section id="Our-customer-support">
  <div className="container">
    <div className="impact-flex">
      <div>
        <img src= {contactUs} className="img2" alt="" />
      </div>
      <div className="content">
        <h2>Our customer support</h2>
        <p>
          We back our products and services with support from our team of
          experts. If you need assistance, you can connect with our Customer
          Support Team at ecobee’s Toronto office. Monday–Friday: 8am to 11pm
          EST Saturday–Sunday: 9am to 9pm EST 1-877-932-6233 (toll free)
          1-647-428-2220 (international)
        </p>
        <div>
          <span className="btnn">Contact us</span>
        </div>
      </div>
    </div>
  </div>
</section>

    
  )
}

export default OurCustomerSupport