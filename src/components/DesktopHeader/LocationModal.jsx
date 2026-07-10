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
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
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

function LocationModal({ close }) {
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
      className="fixed inset-0 z-[99999] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className="absolute inset-0 bg-black/50"
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex h-[620px] w-[780px] max-h-[90vh] max-w-[95vw] flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
      >
        {/* Header */}
        <header className="border-b border-[#e0e0e2] bg-white px-5 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[18px] font-bold">
                انتخاب موقعیت مکانی
              </h2>

              <p className="mt-2 text-[13px] text-[#81858b]">
                برای تحویل به‌موقع سفارش، موقعیت را دقیق انتخاب کنید.
              </p>
            </div>

            <button
              onClick={close}
              className="text-3xl leading-none text-gray-500"
            >
              ×
            </button>
          </div>
        </header>

        {/* Search */}
        <div className="relative px-5 pt-4">
          <div className="rounded-lg bg-white shadow-lg">
            <div className="flex h-14 items-center gap-3 px-4">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-500"
                fill="currentColor"
              >
                <path d="M9.5 3a6.5 6.5 0 015.17 10.44l4.45 4.44-1.41 1.41-4.44-4.45A6.5 6.5 0 119.5 3zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
              </svg>

              <input
                className="flex-1 outline-none"
                placeholder="جستجوی استان و شهر..."
              />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 overflow-hidden px-5 py-4">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom
            className="h-full w-full rounded-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <LocationMarker
              position={position}
              setPosition={setPosition}
            />
          </MapContainer>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white p-5">
          <button
            onClick={close}
            className="h-12 w-full rounded-lg bg-[#ef4056] text-white"
          >
            ثبت موقعیت مکانی
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
}

export default LocationModal;