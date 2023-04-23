import React from "react";
import logo from "../image/officialLogo2.png";
import { Link, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-6 mb-2">
            <img src={logo} className="img-fluid" />
          </div>
          <div className="col-lg-6 d-flex align-items-center mb-2">
            <div className="mb-1">
              <Link
                sx={{ color: "white", backgroundColor: "white" }}
                href="mailto: devmightyeagle@gmail.com"
              >
                SEND AN EMAIL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
