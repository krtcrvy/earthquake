import { CircleX } from "lucide-react";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center">
      <CircleX className="mb-4 size-1/5 text-red-500" />
      <h1 className="text-center text-2xl font-bold">
        An error occurred: {error.message}
      </h1>

      <button
        className="rounded-lg bg-blue-500 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
