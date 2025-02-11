import { companyDetails, publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";
import SectionCounter1 from "./section-counter1";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function SectionAboutCompany() {
  return (
    <>
      <div className="section-full m-t110 p-b50 bg-white sx-about-bx3-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx3-content-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-media">
                    <div className="sx-dot-bx1">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-dot-bx2">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-ab3-img-outer">
                      <div className="sx-ab3-media">
                        <img
                          src={publicUrlFor("images/about/p2.webp")}
                          style={{ aspectRatio: "1", objectFit: "cover" }}
                          className="w-100 h-100 rounded"
                          alt="media"
                        />
                      </div>
                    </div>
                    <div className="sx-ab-circle-box">
                      <div className="sx-ab-circle-box-content">
                        <span className="sx-exp">3+ Years of Innovation</span>
                        <div className="sx-exp-title-outer">
                          {/* <span className="sx-exp-title-1">AI</span>
                          <span className="sx-exp-title-2">Experts</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-content">
                    <h2 className="sx-title">Empowering Businesses with AI</h2>
                    <p>
                      Ankush Tech Solutions is dedicated to harnessing the power
                      of artificial intelligence and cutting-edge technology to
                      drive business success. Our team of experts specializes in
                      AI-driven solutions, custom software development, and
                      strategic digital transformation to help businesses thrive
                      in the modern digital age.
                    </p>
                    <div className="row sx-about-icon-bx3-column">
                      <div className="col-lg-5 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <FaPhoneAlt />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Phone
                            </span>
                            <span className="sx-icon-bx-title">
                              {companyDetails.number}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <FaEnvelope />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Mail
                            </span>
                            <span className="sx-icon-bx-title">
                              {companyDetails.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SectionCounter1 />
            <div className="hilite-title text-left p-l50 text-uppercase">
              <strong>About Us</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany;
