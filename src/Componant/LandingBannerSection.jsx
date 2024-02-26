// import React from 'react'
import "./Style/landingBannerSection.css"
import './Style/landingHeroSection.css'
import img1 from "../assets/Asset 1.png"
import img2 from "../assets/card1.png"
function LandingBannerSection() {
    return (
        <>
            {/* banner */}
            <section className="banner">
                <div className="parent-card">
                    <div className=" s1">
                        <h3>what we do to help our client grow in digital era </h3>
                    </div>
                    <div className="card s2">
                        <img src={img1} alt="" />
                        <h3>bring technology to your confortabal home</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            iusto nobis corporis! Ab at, molestiae similique libero,
                        </p>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow" />
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>
                    <div className="card s3">
                        <img src={img2} alt="" />
                        <h3>bring technology to your confortabal home</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            iusto nobis corporis! Ab at, molestiae similique libero,
                        </p>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow" />
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>
                    <div className="card s4">
                        <img src={img1} alt="" />
                        <h3>bring technology to your confortabal home</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                            iusto nobis corporis! Ab at, molestiae similique libero,
                        </p>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow" />
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingBannerSection;
