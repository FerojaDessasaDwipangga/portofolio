export default function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-transparent">
      <div className="relative">
        <div className="loading loading-ring loading-lg text-accent scale-150"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="mt-8 text-sm font-medium tracking-widest text-accent animate-pulse uppercase">
        Memuat
      </p>
    </div>
  );
}
