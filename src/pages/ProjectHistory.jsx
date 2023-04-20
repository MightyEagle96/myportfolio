import React from "react";
import { Typography, Link } from "@mui/material";
import { aguila, attendance, oliksFarms } from "./data";
export default function ProjectHistory() {
  return (
    <div className="mt-4">
      <div className="d-sm-block d-md-none">
        <div className="container">
          <div className="mb-3" style={{ color: "#3b608d" }}>
            <Typography gutterBottom variant="h6" fontWeight={400}>
              PROJECTS HISTORY
            </Typography>
            <hr />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-end">
              <Typography
                gutterBottom
                fontSize={20}
                fontWeight={500}
                color="#202020"
              >
                1. {aguila.title}
              </Typography>
            </div>
            <div className="mb-1">
              <Typography>{aguila.description}</Typography>
            </div>
            <div className="row mt-1">
              {aguila.images.map((c, i) => (
                <div className="col-lg-3 mb-1">
                  <img src={c} alt={`aguila ${i}`} className="img-fluid" />
                </div>
              ))}
            </div>
            <div>
              <Link target="_blank" href={aguila.url}>
                Check out aguila
              </Link>
            </div>
          </div>
          <div className="mb-3">
            <div>
              <Typography
                gutterBottom
                fontSize={20}
                fontWeight={500}
                color="#202020"
              >
                2. {oliksFarms.title}
              </Typography>
            </div>
            <div className="mb-1">
              <Typography>{oliksFarms.description}</Typography>
            </div>
            <div className="row mt-1">
              {oliksFarms.images.map((c, i) => (
                <div className="col-lg-3 mb-1">
                  <img src={c} alt={`aguila ${i}`} className="img-fluid" />
                </div>
              ))}
            </div>
            <div className="mb-3">
              <Link target="_blank" href={oliksFarms.url}>
                check out oliks farms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
