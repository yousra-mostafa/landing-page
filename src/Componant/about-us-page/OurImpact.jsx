import React from 'react'
import "../Style/about-us-style/aboutUsGeneral.css";
import "../Style/about-us-style/AboutAllSection.css";
import Ourimpact from "../../assets/aboutUSPecture/Our_impact_CAN.webp"

function OurImpact() {
  return (
    <section id="Our-impact">
  <div className="container">
    <div className="impact-flex">
      <div>
        <img src= {Ourimpact} className="img2" alt="" />
      </div>
      <div className="content">
        <h2>Our impact</h2>
        <p>
          ecobee was founded with the goal of offering people smart home
          solutions that enable planet positive actions. We’ve made a lot of
          progress since then, but there’s still more work left to do. We need
          your help because the more we grow, the greener things get. To date,
          ecobee thermostats have delivered over 27.8 TWh of energy savings.
          That’s like taking all the homes in Los Angeles and Chicago off the
          grid or 1.1 million gas-powered cars off the road for a year.
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

export default OurImpact