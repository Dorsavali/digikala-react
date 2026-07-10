import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return <Marker position={position} icon={markerIcon} />;
};

const LocationModal = ({ close }) => {
  const [position, setPosition] = useState({ lat: 35.7005, lng: 51.391 });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 font-[iran,sans-serif]"
    >
      <div className="absolute inset-0" onClick={close} />

      <div className="relative z-[201] h-[620px] w-[780px] max-w-[calc(100vw-32px)] overflow-hidden rounded-xl bg-white shadow-2xl">
        <header className="absolute left-0 right-0 top-0 z-[202] bg-white px-5">
          <div className="border-b border-[#e0e0e2] py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[18px] font-[iranb,sans-serif] text-[#0c0c0c]">
                  انتخاب موقعیت مکانی
                </h2>

                <p className="mt-2 text-[13px] leading-6 text-[#81858b]">
                  برای تحویل به‌موقع سفارش، موقعیت را دقیق انتخاب کنید.
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                className="flex h-8 w-8 items-center justify-center text-[24px] text-[#62666d]"
                aria-label="بستن"
              >
                ×
              </button>
            </div>
          </div>
        </header>

        <div className="flex h-full flex-col pt-[92px] pb-20">
          <div className="relative grow overflow-hidden">
            <div className="absolute left-12 right-12 top-4 z-[202] rounded-lg bg-white shadow-[0_4px_16px_rgba(0,0,0,0.16)]">
              <div className="flex h-14 items-center gap-3 px-4 text-[#81858b]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M9.5 3a6.5 6.5 0 015.17 10.44l4.45 4.44-1.41 1.41-4.44-4.45A6.5 6.5 0 119.5 3zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>

                <input
                  type="text"
                  placeholder="جستجوی استان و شهر ..."
                  className="h-full flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#81858b]"
                />
              </div>
            </div>

            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <LocationMarker position={position} setPosition={setPosition} />
            </MapContainer>
          </div>
        </div>

        <footer className="absolute bottom-0 left-0 right-0 z-[202] bg-white px-5 py-4 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
          <button
            type="button"
            onClick={close}
            className="h-12 w-full rounded-lg bg-[#ef4056] text-[15px] font-[iranb,sans-serif] text-white"
          >
            ثبت موقعیت مکانی
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LocationModal;