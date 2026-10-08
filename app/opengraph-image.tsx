import { ImageResponse } from "next/og";
import { event } from "../lib/event";

export const alt =
  "HackFest 2026 — Building Newark. A three-day hackathon at Rutgers–Newark.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "#141416",
          color: "#F3F1EC",
          borderBottom: "20px solid #A3302A",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, marginBottom: 40 }}>
          {event.name} · GWC x CSRUN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          {event.theme}
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 24 }}>
          {event.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8A8F96",
            marginTop: 48,
          }}
        >
          Three-day hackathon · {event.location} · No experience needed
        </div>
      </div>
    ),
    size,
  );
}
