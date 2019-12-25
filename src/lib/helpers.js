// import { IncomingMessage } from "http";

export const rootUrl = req => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  return req
    ? `${protocol}://${req.headers.host}`
    : `${protocol}://${window.location.host}`;
};
