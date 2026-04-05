'use client';

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white animate-spin mx-auto mb-8" />
        <p className="text-white/60 font-bold uppercase tracking-wider">Loading...</p>
      </div>
    </div>
  );
}
