import { ImageResponse } from "next/og";

export const alt =
  "HackFest is moving to spring. New date and details to come. Rutgers–Newark.";
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
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          HackFest
        </div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 24 }}>
          We’re moving to spring.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8A8F96",
            marginTop: 48,
          }}
        >
          New date and details to come · Rutgers–Newark
        </div>
      </div>
    ),
    size,
  );
}
