import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
});

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return <Marker position={position} icon={icon} />;
}

export default function LocationModal({ close }) {
  const [position, setPosition] = useState({
    lat: 35.700,
    lng: 51.390,
  });

  return (
    <div className="fixed inset-0 bg-black/45 z-50 flex items-center justify-center">

      <div className="bg-white w-[1000px] h-[730px] rounded-3xl overflow-hidden">

        {/* Header */}

        <div className="h-28 border-b px-10 flex justify-between">

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">
              انتخاب موقعیت مکانی
            </h2>

            <p className="text-gray-500 mt-3">
              برای تحویل به‌موقع سفارش، موقعیت دقیق را انتخاب کنید.
            </p>
          </div>

          <button
            onClick={close}
            className="text-5xl text-gray-500"
          >
            ×
          </button>
        </div>

        {/* Search */}

        <div className="absolute top-36 left-1/2 -translate-x-1/2 z-[999] w-[820px]">

          <div className="bg-white rounded-2xl shadow-xl h-20 flex items-center px-8">

            <input
              placeholder="جستجوی استان و شهر ..."
              className="w-full outline-none text-xl"
            />

            🔍

          </div>

        </div>

        {/* Map */}

        <MapContainer
          center={position}
          zoom={13}
          style={{
            height: "520px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker
            position={position}
            setPosition={setPosition}
          />
        </MapContainer>

        {/* Footer */}

        <div className="p-8">

          <button className="bg-[#ef4056] hover:bg-[#e52e45] text-white rounded-2xl h-16 w-full text-xl font-bold">
            ثبت موقعیت مکانی
          </button>

        </div>

      </div>

    </div>
  );
}