"use client";

import { useEffect, useState } from "react";

const units = [
  ["days", "Days", 86_400],
  ["hours", "Hrs", 3_600],
  ["minutes", "Min", 60],
  ["seconds", "Sec", 1],
] as const;

function splitRemaining(milliseconds: number) {
  let remainder = Math.floor(milliseconds / 1000);

  return units.map(([key, label, seconds]) => {
    const value = Math.floor(remainder / seconds);
    remainder -= value * seconds;
    return { key, label, value: String(value).padStart(2, "0") };
  });
}

export default function RegistrationCountdown({
  closesAt,
  closesLabel,
}: {
  closesAt: string;
  closesLabel: string;
}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = now === null ? null : new Date(closesAt).getTime() - now;
  const closed = remaining !== null && remaining <= 0;
  const countdown = remaining !== null && remaining > 0 ? splitRemaining(remaining) : null;

  return (
    <div className="registration-countdown">
      <p className="countdown-label">
        {closed
          ? `Registration closed ${closesLabel}`
          : `Registration closes ${closesLabel}`}
      </p>
      {countdown ? (
        <div className="countdown-clock" aria-hidden="true">
          {countdown.map(({ key, label, value }, index) => (
            <span className="countdown-slot" key={key}>
              {index > 0 ? <span className="countdown-colon">:</span> : null}
              <span className="countdown-unit">
                <strong>{value}</strong>
                <small>{label}</small>
              </span>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
