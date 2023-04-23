import React from "react";
import logo from "../image/officialLogo2.png";
import { Link, Stack, Typography } from "@mui/material";
import { Email, Facebook, Twitter } from "@mui/icons-material";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-none d-lg-block">
          <div className="row text-white">
            <div className="col-lg-6 mb-2">
              <img src={logo} className="img-fluid" alt="logo" />
            </div>
            <div className="col-lg-6 d-flex align-items-center mb-2">
              <div>
                <div className="mb-3">
                  <Link
                    underline="none"
                    sx={{ color: "white", ":hover": { color: "whitesmoke" } }}
                    href="mailto: devmightyeagle@gmail.com"
                  >
                    <Email /> SEND AN EMAIL
                  </Link>
                </div>
                <div className="mb-1">
                  <Stack direction="row" spacing={2}>
                    <div>
                      <Link
                        underline="none"
                        sx={{
                          color: "white",
                          ":hover": { color: "whitesmoke" },
                        }}
                        href="https://web.facebook.com/TheMightyEagle.CEO"
                      >
                        <Facebook />
                      </Link>
                    </div>
                    <div>
                      <Link
                        underline="none"
                        sx={{
                          color: "white",
                          ":hover": { color: "whitesmoke" },
                        }}
                        href="https://twitter.com/TheMightyEagle7"
                      >
                        <Twitter />
                      </Link>
                    </div>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-block d-md-none">
          <div className="d-flex justify-content-center">
            <img src={logo} style={{ height: 100, width: 150 }} alt="logo" />
          </div>
          <div>
            <div className="text-center">
              <Link
                underline="none"
                sx={{ color: "white", ":hover": { color: "whitesmoke" } }}
                href="mailto: devmightyeagle@gmail.com"
              >
                <Email /> SEND AN EMAIL
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <div className="me-2">
                <Link
                  underline="none"
                  sx={{
                    color: "white",
                    ":hover": { color: "whitesmoke" },
                  }}
                  href="https://web.facebook.com/TheMightyEagle.CEO"
                >
                  <Facebook />
                </Link>
              </div>
              <div>
                <Link
                  underline="none"
                  sx={{
                    color: "white",
                    ":hover": { color: "whitesmoke" },
                  }}
                  href="https://twitter.com/TheMightyEagle7"
                >
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
