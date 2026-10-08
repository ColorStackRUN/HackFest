"use client";

import { Widget } from "@typeform/embed-react";
import { event } from "../../lib/event";

export default function RegistrationForm() {
  return (
    <Widget
      id={event.typeformId}
      className="registration-widget"
      iframeProps={{ title: "HackFest 2026 registration form" }}
    />
  );
}
