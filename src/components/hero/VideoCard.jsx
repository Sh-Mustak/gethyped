/**
 * VideoCard
 * ---------
 * Autoplaying muted looping video that fills the card.
 *
 * Props:
 *   videoSrc {string}  Full URL to the video file
 *   overlay  {boolean} Optional dark overlay (default: true)
 */
export default function VideoCard({ videoSrc, overlay = true }) {
  return (
    <div className="relative w-full h-full bg-black ">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {overlay && (
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      )}
    </div>
  );
}
