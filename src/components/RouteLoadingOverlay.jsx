function RouteLoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <p className="text-white text-lg font-semibold animate-pulse">
        Loading Project...
      </p>
    </div>
  );
}

export default RouteLoadingOverlay;
