import React, { useState, useEffect } from "react";
import { UserLocationContext } from "./UserLocationContext"; // Adjust the path to where you created the context
import Geolocation from 'react-native-geolocation-service'; // If you're using this library for location access

const UserLocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
