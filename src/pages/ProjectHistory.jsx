import React from "react";
import { Typography, Link } from "@mui/material";
import { workHistory } from "./data";
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
            {workHistory.map((c, i) => (
              <div className="mb-4">
                <div
                  className={
                    i % 2 === 0 ? "d-flex justify-content-end mb-3" : "mb-3"
                  }
                >
                  <Typography color="#123b5a" fontWeight={500}>
                    {i + 1}. {c.title}
                  </Typography>
                </div>
                <div className="mb-3">
                  <Typography variant="body2">{c.description}</Typography>
                </div>
                <div className="mb-3">
                  {c.images.map((d, k) => (
                    <div className="col-lg-3">
                      <img src={d} className="img-fluid" alt={k} />
                    </div>
                  ))}
                </div>
                <div>
                  <Link target="_blank" underline="hover" href={c.url.link}>
                    {c.url.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
