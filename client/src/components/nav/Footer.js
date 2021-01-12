import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Latest Technology</h5>

            <p>
              Let us help you keep up with the latest technology. We have a
              fantastic range for you to browse, from handy printers to tablets
              and laptops with a huge range of brands and specs for you choose
              from. Go for our lightweight and portable options, like the
              Microsoft Surface or check out our brilliant gaming laptops with
              powerful graphics cards and processors. No matter what you need,
              we’ll have the solution for all your techie requirements.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Customer Service</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/help" className="text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Sirim</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/history" className="text-white">
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/plan" className="text-white">
                  Our Plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        <a className="text-white" href="#">
          Mobile Express!!
        </a>
      </div>
    </footer>
  );
};
