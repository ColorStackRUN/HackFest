"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { venueDirections, venues } from "../../lib/event";

const styleUrl = "https://tiles.openfreemap.org/styles/dark";

function motionDuration() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  return 700;
}

function fitBoth(map: MapLibreMap, maplibregl: typeof import("maplibre-gl")) {
  const bounds = new maplibregl.LngLatBounds();
  for (const venue of venues) {
    bounds.extend([venue.longitude, venue.latitude]);
  }
  map.fitBounds(bounds, {
    padding: { top: 72, right: 72, bottom: 72, left: 72 },
    maxZoom: 16,
    duration: motionDuration(),
  });
}

export default function VenueMap() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let map: MapLibreMap | null = null;
    let cancelled = false;
    let giveUp = 0;

    async function start() {
      const maplibregl = await import("maplibre-gl");
      if (cancelled || !canvas) return;

      maplibregl.setWorkerUrl(
        new URL("/api/maplibre-worker.cjs", window.location.origin).href,
      );

      map = new maplibregl.Map({
        container: canvas,
        style: styleUrl,
        center: [-74.17502, 40.74093],
        zoom: 14.6,
        attributionControl: { compact: true },
        cooperativeGestures: true,
      });
      map.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        "top-right",
      );
      mapRef.current = map;

      map.on("load", () => {
        if (!map) return;
        const paint: Array<[string, string, string]> = [
          ["background", "background-color", "#141416"],
          ["water", "fill-color", "#243140"],
          ["building", "fill-color", "#2b2d31"],
          ["building", "fill-outline-color", "#8a8f96"],
          ["landuse_park", "fill-color", "#1c2420"],
        ];
        const setPaint = map.setPaintProperty.bind(map) as (
          layer: string,
          property: string,
          value: string,
        ) => void;
        for (const [layer, property, value] of paint) {
          if (map.getLayer(layer)) setPaint(layer, property, value);
        }

        const created = venues.map((venue, index) => {
          const pin = document.createElement("button");
          pin.type = "button";
          pin.className = `map-pin${index === 1 ? " is-weekend" : ""}`;
          pin.textContent = venue.step;
          pin.setAttribute(
            "aria-label",
            `${venue.role}: ${venue.name}, ${venue.address}`,
          );
          pin.addEventListener("click", () => {
            setActive((current) => (current === index ? null : index));
          });
          return new maplibregl.Marker({ element: pin, anchor: "center" })
            .setLngLat([venue.longitude, venue.latitude])
            .addTo(map!);
        });
        markersRef.current = created;
        fitBoth(map, maplibregl);
        setReady(true);
      });

      giveUp = window.setTimeout(() => setFailed(true), 8000);
      map.on("load", () => window.clearTimeout(giveUp));
    }

    void start();

    return () => {
      cancelled = true;
      window.clearTimeout(giveUp);
      markersRef.current = [];
      map?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    markersRef.current.forEach((marker, index) => {
      const pin = marker.getElement();
      const selected = index === active;
      pin.classList.toggle("is-active", selected);
      pin.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    if (!map || !ready) return;

    if (active === null) {
      void import("maplibre-gl").then((maplibregl) => {
        if (mapRef.current) fitBoth(mapRef.current, maplibregl);
      });
      return;
    }

    const venue = venues[active];
    map.easeTo({
      center: [venue.longitude, venue.latitude],
      zoom: 16.5,
      duration: motionDuration(),
    });
  }, [active, ready]);

  return (
    <div className="venue-layout">
      <ol className="venue-list">
        {venues.map((venue, index) => {
          const selected = active === index;
          return (
            <li
              className={`venue-card${selected ? " is-active" : ""}`}
              key={venue.id}
            >
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(selected ? null : index)}
              >
                <span className="venue-step">{venue.step}</span>
                <span>
                  <span className="venue-role">{venue.role}</span>
                  <strong className="venue-name">{venue.name}</strong>
                  <span className="venue-address">
                    {venue.address}
                    <br />
                    {venue.city}
                  </span>
                  <span className="venue-note">{venue.note}</span>
                </span>
              </button>
              <a
                className="venue-directions"
                href={venueDirections(venue.address, venue.city)}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </li>
          );
        })}
      </ol>
      <div className="venue-map">
        <div ref={canvasRef} className="venue-map-canvas" />
        {ready ? null : (
          <p className="venue-map-fallback">
            {failed
              ? "The map didn’t load. The addresses and direction links still work."
              : "Loading the campus map."}
          </p>
        )}
      </div>
    </div>
  );
}
