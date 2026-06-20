export default function SunsetKitchenLogo({ size = 64, className = '', showTagline = size > 72 }) {
  const id = `sk-${size}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-label="The Sunset Kitchen"
      role="img"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="30" y1="20" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde68a" />
          <stop offset="0.35" stopColor="#fbbf24" />
          <stop offset="0.7" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id={`${id}-gold-light`} x1="60" y1="40" x2="140" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7d6" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="96" fill="#0f0f0f" />
      <circle cx="100" cy="100" r="96" stroke={`url(#${id}-gold)`} strokeWidth="2.5" opacity="0.35" />

      <path
        d="M34 118c0-38 18-68 66-68s66 30 66 68"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 124c0-30 16-54 58-54s58 24 58 54"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.2"
        strokeOpacity="0.55"
        fill="none"
      />

      {showTagline && (
        <>
          <path d="M100 176l4 6h-8l4-6z" fill={`url(#${id}-gold)`} />
          <path d="M78 138l-8-4M122 138l8-4" stroke={`url(#${id}-gold-light)`} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M88 132h-6M112 132h6" stroke={`url(#${id}-gold-light)`} strokeWidth="1.5" strokeLinecap="round" />
          <g fill={`url(#${id}-gold-light)`}>
            <path d="M88 146l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L88 146z" />
            <path d="M100 142l2.4 5 5.2.8-3.8 3.7 1 5.2-4.8-2.5-4.8 2.5 1-5.2-3.8-3.7 5.2-.8L100 142z" />
            <path d="M112 146l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L112 146z" />
          </g>
          <text
            x="100"
            y="166"
            textAnchor="middle"
            fill={`url(#${id}-gold)`}
            fontFamily="'Segoe Script', 'Brush Script MT', 'Lucida Handwriting', cursive"
            fontSize="13"
          >
            Home of Amazing Food
          </text>
        </>
      )}

      {/* Chef hat */}
      <g stroke={`url(#${id}-gold)`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M128 54c10-8 24-6 28 6 2 8-2 14-10 16-6 2-12 0-18-4" />
        <path d="M120 72c4 10 28 10 36 0" />
        <path d="M118 72h40" strokeWidth="2.6" />
      </g>

      {/* Fork & spoon */}
      <g stroke={`url(#${id}-gold)`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M58 44v34" />
        <path d="M52 44v10c0 4 3 7 6 7s6-3 6-7V44" />
        <path d="M54 54h4M54 60h4M54 66h4" strokeWidth="1.8" />
        <path d="M74 78V54" />
        <ellipse cx="74" cy="46" rx="5" ry="7" fill="#0f0f0f" stroke={`url(#${id}-gold)`} strokeWidth="2" />
      </g>

      <text
        x="100"
        y={showTagline ? 108 : 118}
        textAnchor="middle"
        fill={`url(#${id}-gold-light)`}
        fontFamily="'Segoe Script', 'Brush Script MT', 'Lucida Handwriting', cursive"
        fontSize={showTagline ? 28 : 32}
        fontWeight="700"
      >
        Sunset Kitchen
      </text>
    </svg>
  );
}
