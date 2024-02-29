

import "../Style/about-us-style/aboutUsGeneral.css";
import Hero_Cad from "../../assets/aboutUSPecture/Hero_Cad.webp"

import "../Style/about-us-style/aboutUsHeader.css";
function AboutUsHeader() {
  return (
    <>
  {/* -------------------------start header ---------- */}
  <header className="d-flex flex-wrap">
    <div className="container">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
            <span>/</span>
          </li>
          <li>
            <span>About ecobee</span>
          </li>
        </ul>
      </nav>
    </div>
    <div className="container row">
      <div className="content1 col-6">
        <h1 className="">About ecobee</h1>
        <p>
          ecobee is about improving everyday life, while creating a more
          sustainable world.
        </p>
      </div>
    </div>
    <div>
      <img src= {Hero_Cad} className="header-img" alt="img" />
    </div>
  </header>
  
  {/* -------------------------end header ---------- */}
</>

  )
}

export default AboutUsHeader