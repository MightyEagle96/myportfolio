import { Avatar, Typography, Stack } from "@mui/material";
import React from "react";
import logo from "../image/logo.jpg";
import officialLogo from "../image/officialLogo2.png";
import { myData } from "./data";

export default function HeaderComponent() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="desktopBanner text-white  d-flex justify-content-center align-items-center">
          <div className="container mt-4 mb-4">
            <Stack direction="row">
              <div className="col-lg-2">
                <Avatar src={logo} sx={{ height: 200, width: 200 }} />
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
                    fontWeight={700}
                    gutterBottom
                  >
                    {myData.subtitle}
                  </Typography>
                  <Typography
                    textTransform={"capitalize"}
                    variant="h6"
                    fontWeight={300}
                  >
                    {myData.academicTitle}
                  </Typography>
                </div>
              </div>
              <div className="col-lg-2">
                <img
                  src={officialLogo}
                  className="img-fluid"
                  alt="Mighty Eagle Logo"
                />
              </div>
            </Stack>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <div className="desktopBanner text-white  d-flex justify-content-center align-items-center">
          <div className="container mt-4 mb-4">
            <Stack direction="row" spacing={2}>
              <div className="col-lg-2">
                <Avatar src={logo} sx={{ height: 150, width: 150 }} />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    {myData.name}
                  </Typography>
                  <hr />
                  <Typography
                    textTransform={"uppercase"}
                    variant="body1"
                    fontWeight={700}
                    gutterBottom
                  >
                    {myData.subtitle}
                  </Typography>
                  <Typography textTransform={"capitalize"} fontWeight={300}>
                    {myData.academicTitle}
                  </Typography>
                </div>
              </div>
            </Stack>
          </div>
        </div>
      </div>
      <div className="d-sm-block d-md-none ">
        <div className="mobileBanner d-flex align-items-center text-white">
          <div className="container mt-4 mb-4">
            <div className="d-flex justify-content-center">
              <Avatar src={logo} sx={{ height: 120, width: 120 }} />
            </div>
            <div className="mt-3">
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {myData.name}
              </Typography>
              <hr />
              <Typography variant="h6">{myData.subtitle}</Typography>
              <Typography textTransform={"capitalize"} fontWeight={300}>
                {myData.academicTitle}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
