const usgsEarthquakeApiUrl = import.meta.env.VITE_USGS_EARTHQUAKE_API_URL;

export const fetchEarthquakes = async () => {
  const response = await fetch(usgsEarthquakeApiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch earthquake data");
  }
  return response.json();
};
