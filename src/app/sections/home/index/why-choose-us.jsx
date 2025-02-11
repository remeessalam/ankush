import { FaTools, FaHandshake } from "react-icons/fa";
import ItodoImage from "../../../elements/itodo-img";

function WhyChooseUs() {
  return (
    <>
      <div className="section-full p-b30 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Why Choose Us?</h2>
                    <p>
                      We don’t just build solutions—we build partnerships. Our
                      expert team is dedicated to delivering cutting-edge
                      digital solutions tailored to your business needs. Whether
                      it’s web development, AI solutions, or digital strategy,
                      we focus on innovation, efficiency, and excellence to help
                      you stay ahead in the digital landscape.
                    </p>
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <FaTools />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              Advanced Tech Solutions
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <FaHandshake />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              Client-Centric Approach
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 d-lg-flex d-none col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
