import { Chip, Typography } from "@mui/material";
import React from "react";
import { techStack } from "./data";

export default function TechStack() {
  return (
    <div className="mb-5 mt-5 container">
      <div className="d-none d-lg-block">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 ">
            <div className="p-3 mb-4  " style={{ backgroundColor: "#b0ebe9" }}>
              <Typography variant="h4" color="#077893">
                Tech Stack
              </Typography>
            </div>
            <div>
              {techStack.sort().map((c, i) => (
                <Chip
                  label={c}
                  key={i}
                  sx={{ fontSize: 18 }}
                  className="me-2 mb-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" d-sm-block d-md-none">
        <div className="col-lg-6 ">
          <div
            className="p-2 mb-4 text-center "
            style={{ backgroundColor: "#b0ebe9" }}
          >
            <Typography variant="h6" color="#077893">
              Tech Stack
            </Typography>
          </div>
          <div>
            {techStack.sort().map((c, i) => (
              <Chip
                label={c}
                key={i}
                sx={{ fontSize: 14 }}
                className="me-2 mb-2"
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" d-none d-md-block d-lg-none">
        <div className="">
          <div
            className="p-2 mb-4 col-md-6 text-center "
            style={{ backgroundColor: "#b0ebe9" }}
          >
            <Typography variant="h6" color="#077893">
              Tech Stack
            </Typography>
          </div>
          <div>
            {techStack.sort().map((c, i) => (
              <Chip
                label={c}
                key={i}
                sx={{ fontSize: 14 }}
                className="me-2 mb-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
