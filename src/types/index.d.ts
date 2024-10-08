export type Earthquake = {
  id: string;
  properties: {
    mag: number;
    place: string;
  };
  geometry: {
    coordinates: [number, number];
  };
};

export type EarthquakeResponse = {
  features: Earthquake[];
};
