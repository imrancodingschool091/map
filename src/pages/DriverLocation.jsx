import { useEffect } from "react";

function DriverLocation() {

  useEffect(() => {

    // 1️⃣ Browser GPS support check
    if (!navigator.geolocation) {
      console.log("❌ GPS supported nahi hai");
      return;
    }

    console.log("✅ GPS supported");
    console.log("📡 Location ka wait ho raha hai...");

    // 2️⃣ Live location start
    navigator.geolocation.watchPosition(
      (position) => {
        console.clear();
        console.log("🚚 DRIVER LOCATION");
        console.log("Latitude :", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      (error) => {
        console.log("❌ Error:", error.message);
      },
      {
        enableHighAccuracy: true
      }
    );

  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Driver Location Page</h2>
      <p>Console open rakho (F12)</p>
      <p>Phone unlock rakho</p>
    </div>
  );
}

export default DriverLocation;
