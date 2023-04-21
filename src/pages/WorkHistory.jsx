import { Chip, Typography } from "@mui/material";
import React from "react";
import { workHistory } from "./data";

export default function WorkHistory() {
  return (
    <div className="mt-5 mb-5 container">
      <div className="d-none d-lg-block">
        <div className="row bg-light p-0">
          <div className="col-lg-6 p-0">
            <div>
              {workHistory.map((c) => (
                <div
                  className="p-3 mb-2 rounded-bottom"
                  style={{ backgroundColor: "#e9f1f6" }}
                >
                  <Typography fontSize={24}>{c.office}</Typography>
                  <Typography gutterBottom fontSize={18}>
                    {c.role}
                  </Typography>
                  <div className="d-flex justify-content-between">
                    <Typography fontStyle={"italic"}>{c.date}</Typography>
                    {c.present && <Chip label={c.present} color="error" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div
              className="p-3 mb-3 col-lg-12 text-center rounded"
              style={{ backgroundColor: "#dfefce", color: "#2792b9" }}
            >
              <Typography variant="h4" fontWeight={700}>
                Work History
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <div className="row bg-light p-0">
          <div className="col-lg-6 p-0">
            <div
              className="p-3 mb-3 col-lg-12 text-center rounded"
              style={{ backgroundColor: "#dfefce", color: "#2792b9" }}
            >
              <Typography variant="h6" fontWeight={700}>
                Work History
              </Typography>
            </div>
            <div>
              {workHistory.map((c) => (
                <div
                  className="p-3 mb-2 rounded-bottom"
                  style={{ backgroundColor: "#e9f1f6" }}
                >
                  <Typography fontSize={24}>{c.office}</Typography>
                  <Typography gutterBottom fontSize={18}>
                    {c.role}
                  </Typography>
                  <div className="d-flex justify-content-between">
                    <Typography fontStyle={"italic"}>{c.date}</Typography>
                    {c.present && <Chip label={c.present} color="error" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-sm-block d-md-none">
        <div
          className="p-2 mb-3 col-lg-12 text-center rounded"
          style={{ backgroundColor: "#dfefce", color: "#2792b9" }}
        >
          <Typography variant="h6" fontWeight={500}>
            Work History
          </Typography>
        </div>
        <div>
          {workHistory.map((c) => (
            <div
              className="p-3 mb-2 rounded-bottom"
              style={{ backgroundColor: "#e9f1f6" }}
            >
              <Typography fontSize={16}>{c.office}</Typography>
              <Typography gutterBottom fontSize={14}>
                {c.role}
              </Typography>
              <div className="d-flex justify-content-between">
                <Typography fontStyle={"italic"} variant="subtitle2">
                  {c.date}
                </Typography>
                {c.present && <Chip label={c.present} color="error" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
