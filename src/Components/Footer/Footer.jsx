import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <div className="location">
            <div className="location-svg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ei-location.svg/2048px-Ei-location.svg.png" />
            </div>
            <div className="footer-text">
              <p>
                Sapphire Retail Head Office <br></br> 1.5-Km, Defence Road,
                Bhobtian Chowk, Off Raiwind <br></br> Road, Opposite University
                of Lahore, Lahore
              </p>
            </div>
          </div>

          <div className="email">
            <div className="email-svg">
              <img src="https://www.svgrepo.com/show/137590/email.svg" />
            </div>
            <div className="footer-text">
              <a href="#">wecare@sapphireonline.pk</a>
            </div>
          </div>

          <div className="phone">
            <div className="phone-svg">
              <img src="https://www.iconpacks.net/icons/1/free-phone-icon-519-thumb.png" />
            </div>

            <div className="footer-text">
              <p>+92(0)42 111-738-245</p>
            </div>
          </div>
        </div>
        <div className="customer-care">
          <h2>CUSTOMER CARE</h2>
          <div className="customer-content">
            <a href="#">Exchange & Return Policy</a>
            <a href="#">FAQS</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className="information">
          <h2>INFORMATION</h2>
          <div className="infor-content">
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">SafePay Guide</a>
            <a href="#">Payments</a>
            <a href="#">Store Locator</a>
            <a href="#">Fabric Glossary</a>
            <a href="#">Blogs</a>
          </div>
        </div>
        <div className="News">
          <h2>Newsletter Signup</h2>
          <div className="News-content">
            <div className="footer-text">
              <p>Subscribe to our Newsletter for Exclusive Updates</p>
            </div>
            <div className="emailsubscribe">
              <div className="emailborer">
                <form className="email-subscription">
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
              <div className="social-icons">
                <a href="#" className="icon facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    {/* Facebook SVG path */}
                    <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.5C14 5.673 14.673 5 15.5 5H18V1h-2.5C12.462 1 10 3.462 10 6.5V8z" />
                  </svg>
                </a>
                <a href="#" className="icon instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    {/* Instagram SVG path */}
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84 0 3.195-.012 3.574-.07 4.84-.062 1.366-.344 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.84.07-3.195 0-3.574-.012-4.84-.07-1.366-.062-2.633-.344-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608-.058-1.266-.07-1.646-.07-4.84 0-3.195.012-3.574.07-4.84.062-1.366.344-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32 1.266-.058 1.646-.07 4.84-.07zm0-2.163C8.741 0 8.332.015 7.052.073 5.684.135 4.341.418 3.323 1.436c-1.018 1.018-1.3 2.361-1.363 3.73C1.902 6.955 1.888 7.364 1.888 12c0 4.636.015 5.045.073 6.324.063 1.368.345 2.711 1.363 3.73 1.018 1.018 2.361 1.3 3.73 1.363 1.279.058 1.688.073 6.324.073 4.636 0 5.045-.015 6.324-.073 1.368-.063 2.711-.345 3.73-1.363 1.018-1.018 1.3-2.361 1.363-3.73.058-1.279.073-1.688.073-6.324 0-4.636-.015-5.045-.073-6.324-.063-1.368-.345-2.711-1.363-3.73-1.018-1.018-2.361-1.3-3.73-1.363C16.955.015 16.545 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
                  </svg>
                </a>
                <a href="#" className="icon youtube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    {/* YouTube SVG path */}
                    <path d="M19.615 3.184C18.42 2.63 12 2.63 12 2.63s-6.42 0-7.615.554C2.183 4.066 2 7.91 2 7.91s0 3.844.385 5.275c.4 1.537 1.506 2.213 3.055 2.358 1.408.132 6.56.257 6.56.257s6.42 0 7.615-.554c1.552-.544 1.736-4.388 1.736-4.388s0-3.844-.385-5.275c-.4-1.537-1.506-2.213-3.055-2.358-1.408-.132-6.56-.257-6.56-.257s-6.42 0-7.615-.554zM9.75 14.207v-4.414l4.207 2.207-4.207 2.207z" />
                    {/* <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /> */}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="footer-text">
          <p>© COPYRIGHT 2024 SAPPHIRE</p>
        </div>
        <div className="transtionimages">
          <a href="#">
            <img src="https://pk.sapphireonline.pk/cdn/shop/files/logogs_80587d78-218a-43ff-92d2-3b65e39da5f6_1.jpg?v=1661162182&width=600" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
