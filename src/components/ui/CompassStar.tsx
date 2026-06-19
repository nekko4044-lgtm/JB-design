export default function CompassStar({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2L22.5 17.5L38 20L22.5 22.5L20 38L17.5 22.5L2 20L17.5 17.5L20 2Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20 8L21.5 18.5L32 20L21.5 21.5L20 32L18.5 21.5L8 20L18.5 18.5L20 8Z"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
