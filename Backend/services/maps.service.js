import axios from "axios";

export const getAddressCoordinate = async (address) => {
  const apiKey = process.env.OLA_MAPS_API;
  const url = `https://api.olamaps.io/places/v1/geocode?address=${encodeURIComponent(address)}&language=English&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (
      response.data &&
      response.data.status === "ok" &&
      Array.isArray(response.data.geocodingResults) &&
      response.data.geocodingResults.length > 0
    ) {
      const firstResult = response.data.geocodingResults[0];
      const location = firstResult.geometry.location;

      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      console.error("⚠️ Invalid response format:", response.data);
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error("❌ Ola Maps Error:", error.response?.data || error.message);
    throw error;
  }
};

// Haversine formula to calculate straight-line distance

export const haversineDistance = (coord1, coord2) => {
  const R = 6371e3; // radius of Earth in meters
  const toRad = (deg) => (deg * Math.PI) / 180;

  const dLat = toRad(coord2.lat - coord1.lat);
  const dLng = toRad(coord2.lng - coord1.lng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(coord1.lat)) * Math.cos(toRad(coord2.lat)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // distance in meters
};

export const getDistanceTimeService = async (origin, destination) => {

  const apiKey = process.env.OLA_MAPS_API;
  if (!apiKey) throw new Error("OLA_MAPS_API key is missing");

  const mode = "car";
  const url = `https://api.olamaps.io/routing/v1/directions?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&mode=${mode}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (
      response.data &&
      response.data.status === "ok" &&
      Array.isArray(response.data.routes) &&
      response.data.routes.length > 0
    ) {
      const route = response.data.routes[0];
      const leg = route.legs && route.legs[0];
      if (!leg) throw new Error("No route legs found");

      return {
        distance: leg.distance.text,
        distanceValue: leg.distance.value,
        duration: leg.duration.text,
        durationValue: leg.duration.value,
        source: "Ola Maps",
      };
    } else {
      throw new Error("No route found");
    }
  } catch (error) {
    console.warn("❌ Ola Maps failed, falling back to straight-line distance");

    // Fallback: straight-line distance
    const distanceMeters = haversineDistance(origin, destination);
    const avgSpeedMps = 15; // assume 15 m/s (~54 km/h) average speed
    const durationSeconds = distanceMeters / avgSpeedMps;

    return {
      distance: `${(distanceMeters / 1000).toFixed(2)} km`,
      distanceValue: distanceMeters,
      duration: `${Math.ceil(durationSeconds / 60)} mins`,
      durationValue: Math.ceil(durationSeconds),
      source: "Fallback",
    };
  }
};

export const getSuggestionService = async (input) => {
  const apiKey = process.env.OLA_MAPS_API;
  if (!apiKey) throw new Error("OLA_MAPS_API key is missing");

  const url = `https://api.olamaps.io/places/v1/autocomplete?input=${encodeURIComponent(input)}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (
      response.data &&
      response.data.status === "ok" &&
      Array.isArray(response.data.predictions)
    ) {
      return response.data.predictions.map((prediction) => ({
        id: prediction.place_id,
        description: prediction.description,
      }));
    } else {
      console.error("⚠️ Invalid response format:", response.data);
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error("❌ Ola Maps Error:", error.response?.data || error.message);
    throw error;
  }
};
