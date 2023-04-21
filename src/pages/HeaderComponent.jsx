import { Avatar, Typography } from "@mui/material";
import React from "react";
import logo from "../image/logo.jpg";
import { myData } from "./data";

export default function HeaderComponent() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="desktopBanner">
          <div className="container">
            <div className="row text-white">
              <div className="col-lg-3">
                <img src={logo} className="img-fluid" alt="logo" />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <Typography
                    letterSpacing={2}
                    variant="h3"
                    fontWeight={700}
                    gutterBottom
                  >
                    {myData.name}
                  </Typography>
                  <hr />
                  <Typography
                    textTransform={"uppercase"}
                    variant="h6"
                    fontWeight={300}
                  >
                    {myData.subtitle}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-sm-block d-md-none ">
        <div className="mobileBanner d-flex align-items-center text-white">
          <div className="container">
            <div className="d-flex justify-content-center">
              <Avatar src={logo} sx={{ height: 150, width: 150 }} />
            </div>
            <div className="mt-3">
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {myData.name}
              </Typography>
              <hr />
              <Typography>{myData.subtitle}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
