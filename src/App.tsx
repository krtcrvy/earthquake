import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { APIProvider } from "@vis.gl/react-google-maps";

import EarthquakeMap from "./components/EarthquakeMap";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <APIProvider apiKey={googleMapsApiKey}>
        <EarthquakeMap />
      </APIProvider>
    </QueryClientProvider>
  );
}

export default App;
