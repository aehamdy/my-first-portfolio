import { useLoading } from "../context/LoadingContext";

function GlobalLoadingOverlay() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center">
      <p className="text-white text-lg animate-pulse">Loading Project...</p>
    </div>
  );
}

export default GlobalLoadingOverlay;
