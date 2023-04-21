import { Typography } from "@mui/material";
import React from "react";
import { educationHistory } from "./data";

export default function EducationHistory() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-none d-md-block">
          <div
            className="col-lg-6 p-3 text-white mb-3"
            style={{ backgroundColor: "#003580" }}
          >
            <Typography variant="h5">Education History </Typography>
          </div>
          <div>
            {educationHistory.map((c) => (
              <div className="mb-1">
                <Typography color="#252222" variant="h5">
                  {c.name}
                </Typography>
                <Typography fontStyle={"italic"}>-{c.year}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="d-sm-block d-md-none">
          <div
            className="col-lg-6 p-2 text-white text-center mb-3"
            style={{ backgroundColor: "#003580" }}
          >
            <Typography variant="h6">Education History </Typography>
          </div>
          <div>
            {educationHistory.map((c) => (
              <div className="mb-1">
                <Typography color="#252222">{c.name}</Typography>
                <Typography variant="subtitle2" fontStyle={"italic"}>
                  -{c.year}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
