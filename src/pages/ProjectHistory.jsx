import React from "react";
import { Typography, Link } from "@mui/material";
import { projectHistory } from "./data";
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
            {projectHistory.map((c, i) => (
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

      <div className="d-none d-lg-block">
        <div className="container">
          <div className="mb-5 text-center" style={{ color: "#3b608d" }}>
            <Typography gutterBottom variant="h4" fontWeight={600}>
              PROJECTS HISTORY
            </Typography>
          </div>
          <div className="mb-3">
            {projectHistory.map((c, i) => (
              <div className="mb-5">
                <div className="row">
                  {i % 2 === 1 ? (
                    <>
                      <div className="col-lg-6 d-flex flex-wrap">
                        {c.images.map((d, k) => (
                          <div className="col-lg-6 mb-2">
                            <img className="img-fluid" alt={k} src={d} />
                          </div>
                        ))}
                      </div>
                      <div className="col-lg-6 d-flex align-items-center">
                        <div>
                          <Typography
                            color="#123b5a"
                            variant="h5"
                            fontWeight={700}
                          >
                            {c.title}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            {c.description}
                          </Typography>
                          <Link
                            target="_blank"
                            underline="hover"
                            href={c.url.link}
                          >
                            {c.url.text}
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-lg-6 d-flex align-items-center">
                        <div>
                          <Typography
                            color="#123b5a"
                            variant="h5"
                            fontWeight={700}
                          >
                            {c.title}
                          </Typography>

                          <Typography variant="body1" gutterBottom>
                            {c.description}
                          </Typography>
                          <Link
                            target="_blank"
                            underline="hover"
                            href={c.url.link}
                          >
                            {c.url.text}
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex flex-wrap">
                        {c.images.map((d, k) => (
                          <div className="col-lg-6 mb-2">
                            <img className="img-fluid" alt={k} src={d} />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-none d-md-block d-lg-none">
        <div className="container">
          <div className="mb-5 text-center" style={{ color: "#3b608d" }}>
            <Typography gutterBottom variant="h5" fontWeight={600}>
              PROJECTS HISTORY
            </Typography>
          </div>
          <div className="mb-5">
            {projectHistory.map((c, i) => (
              <div className="mb-4">
                <div className="text-center">
                  <Typography color="#123b5a" variant="h6" fontWeight={700}>
                    {c.title}
                  </Typography>
                </div>
                <div className="mb-3">
                  <Typography>{c.description}</Typography>
                </div>
                <div className="mb-3 d-flex flex-wrap">
                  {c.images.map((d, k) => (
                    <div className="col-md-6">
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
