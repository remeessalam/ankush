const testimonials = [
  {
    id: 1,
    name: "Jessica H.",
    designation: "Marketing Director, Bright Solutions",
    review:
      "The team at Ankush Tech Solutions exceeded our expectations. They took the time to understand our specific needs and built a stunning, user-friendly website that has helped boost our traffic and conversions. We've noticed a significant uptick in engagement, and the website now plays a crucial role in our business growth.",
  },
  {
    id: 2,
    name: "Mark T.",
    designation: "CEO, GreenTech Innovations",
    review:
      "Collaborating with Ankush Tech Solutions on our app was an amazing experience. From the start to the final product, they provided expert guidance and innovative solutions. The app not only looks incredible but also functions seamlessly, and our customers have been thrilled with the results. We’re so glad we chose them for this project.",
  },
  {
    id: 3,
    name: "Sarah P.",
    designation: "Founder, HealthyBites",
    review:
      "As a startup, we had a tight budget and timeline. Ankush Tech Solutions managed to bring our vision to life with a sleek, effective website that perfectly reflects our brand. Their support doesn’t stop after launch either, as they’ve continued to assist us as we expand. They genuinely care about helping their clients succeed.",
  },
  {
    id: 4,
    name: "Ethan R.",
    designation: "Director of Operations, The Modern Firm",
    review:
      "Our old website was outdated and not performing as we hoped, so we decided to invest in a complete redesign. From our first meeting with Ankush Tech Solutions, we felt confident that we were in good hands. They gave our site a fresh, modern look and improved its performance. Now, it’s a key part of our marketing efforts and has helped us reach more customers.",
  },
  {
    id: 5,
    name: "Linda M.",
    designation: "Product Manager, FinEdge Solutions",
    review:
      "We needed an app that was both functional and packed with advanced features. Ankush Tech Solutions delivered on all fronts. Their team worked with us closely throughout the development process to create an app that performs beautifully and meets our users’ needs. The feedback from our customers has been overwhelmingly positive, and it’s already making a difference to our business.",
  },
  {
    id: 6,
    name: "James D.",
    designation: "CEO, Urban Home Decor",
    review:
      "Our experience with Ankush Tech Solutions in SEO and digital marketing was transformative. They helped us rework our entire strategy, leading to increased organic traffic, better rankings on search engines, and a marked increase in conversions. Their expertise and meticulous approach make them an invaluable partner for our business.",
  },
  {
    id: 7,
    name: "Natalie B.",
    designation: "COO, Global Outreach Organization",
    review:
      "Ankush Tech Solutions provided the exact solutions we didn’t know we needed. Our website and app lacked several essential features, and they helped us redesign them to be more user-friendly and efficient. Their technical know-how and exceptional customer service have made them an irreplaceable part of our team.",
  },
];

function SectionTestimonials1() {
  return (
    <>
      <div className="section-full  p-t10 p-b10 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            {/*testimonial section */}

            <div className="sx-testimonial-bx-2  m-b30">
              {/* TITLE START */}
              <div className="section-head center">
                <div className="sx-head-s-title">Our Testimonials</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title">What Clients Say?</h2>
                </div>
              </div>
              {/* TITLE END */}
              <div className="owl-carousel testimonial-section-2 owl-btn-vertical-center">
                {testimonials.map((obj, i) => (
                  <div key={i} className="item">
                    <div className="testimonial-1 hover-animation-1 sx-bg-white">
                      <div className="testimonial-text">
                        <p>{obj.review}</p>
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-user-info">
                          <h4 className="testimonial-name">{obj.name}</h4>
                          <span className="testimonial-position">
                            {obj.designation}
                          </span>
                        </div>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-quote sx-text-primary">
                          <i className="flaticon-quote" />
                        </div>
                        <ul className="sx-rating-st1">
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTestimonials1;
