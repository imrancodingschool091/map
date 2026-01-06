import { useEffect, useState } from "react";

function DriverLocation() {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("❌ GPS supported nahi hai");
      return;
    }

    console.log("✅ GPS supported");
    console.log("📡 Location ka wait ho raha hai...");

    const watchId = navigator.geolocation.watchPosition(
      async (position) => {
        console.clear();
        const { latitude, longitude } = position.coords;
        console.log("🚚 DRIVER LOCATION");
        console.log("Latitude :", latitude);
        console.log("Longitude:", longitude);

        // Reverse geocode
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAx4J-pScIKpTGaCvzPPHFEyKSrGog2578`
          );
          const data = await res.json();

          if (data.status === "OK") {
            const formattedAddress = data.results[0]?.formatted_address;
            console.log("📍 Address:", formattedAddress);
            setAddress(formattedAddress);
          } else {
            console.log("❌ Address not found");
          }
        } catch (err) {
          console.log("❌ Geocoding error:", err);
        }
      },
      (error) => {
        console.log("❌ Error:", error.message);
      },
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Driver Location Page</h2>
      <p>Console open rakho (F12)</p>
      <p>Phone unlock rakho</p>
      {address && <p>Current Location: {address}</p>}
    </div>
  );
}

export default DriverLocation;
