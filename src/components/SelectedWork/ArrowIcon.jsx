export default function ArrowButton({ className = "" }) {
  return (
    <div
      className={`w-8 h-8 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12L12 2M4 2H12V10"
          stroke="#111"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
