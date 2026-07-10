import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return <Marker position={position} icon={markerIcon} />;
}

export default function MobileLocation({ onClose }) {
  const [position, setPosition] = useState({
    lat: 35.7005,
    lng: 51.391,
  });

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  return createPortal(
    <div
      dir="rtl"
      className="fixed inset-0 z-[999999] flex flex-col bg-white"
    >
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-[#e0e0e2] px-4">
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-[30px] text-[#62666d]"
        >
          ×
        </button>

        <h2 className="text-[17px] font-bold">
          انتخاب موقعیت مکانی
        </h2>

        <div className="w-10" />
      </header>

      {/* Search */}
      <div className="p-4">
        <div className="flex h-12 items-center rounded-xl bg-[#f5f5f5] px-4">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-[#81858b]"
            fill="currentColor"
          >
            <path d="M9.5 3a6.5 6.5 0 015.17 10.44l4.45 4.44-1.41 1.41-4.44-4.45A6.5 6.5 0 119.5 3zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>

          <input
            type="text"
            placeholder="جستجوی شهر یا آدرس..."
            className="mr-3 flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#81858b]"
          />
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <LocationMarker
            position={position}
            setPosition={setPosition}
          />
        </MapContainer>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e0e0e2] bg-white p-4">
        <button
          type="button"
          onClick={onClose}
          className="h-12 w-full rounded-xl bg-[#ef4056] text-[15px] font-bold text-white"
        >
          ثبت موقعیت مکانی
        </button>
      </footer>
    </div>,
    document.body
  );
}