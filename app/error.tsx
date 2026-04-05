'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-4">ERROR</h1>
        <p className="text-white/60 mb-8 max-w-md">{error.message}</p>
        <button
          onClick={reset}
          className="bg-white text-black px-8 py-4 font-black uppercase hover:bg-white/90 transition-colors"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
