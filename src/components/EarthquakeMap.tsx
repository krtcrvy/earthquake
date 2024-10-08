import { useQuery } from "@tanstack/react-query";
import { Map, Marker } from "@vis.gl/react-google-maps";
import { CircleX, LoaderCircle } from "lucide-react";
import { fetchEarthquakes } from "../services/apiUsgs";
import { EarthquakeResponse } from "../types";

function EarthquakeMap() {
  const { data, isLoading, error } = useQuery<EarthquakeResponse>({
    queryKey: ["earthquakes"],
    queryFn: fetchEarthquakes,
  });

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoaderCircle className="size-1/4 animate-spin text-blue-500" />
      </div>
    );

  if (error)
    return (
      <div className="mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center">
        <CircleX className="mb-4 size-1/5 text-red-500" />
        <h1 className="text-center text-2xl font-bold">
          An error occurred: {error?.message || "Something went wrong"}
        </h1>
      </div>
    );

  return (
    <>
      <h1 className="bg-blue-500 px-4 py-2.5 text-2xl font-bold text-white lg:px-6">
        Earthquake Monitoring App
      </h1>

      <Map
        className="h-screen w-full"
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={3}
      >
        {data?.features.map((earthquake) => (
          <Marker
            key={earthquake.id}
            position={{
              lat: earthquake.geometry.coordinates[1],
              lng: earthquake.geometry.coordinates[0],
            }}
          />
        ))}
      </Map>
    </>
  );
}

export default EarthquakeMap;
