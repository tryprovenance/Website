import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & {
  compact?: boolean;
};

export function Logo({ compact = false, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 168 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <g>
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          stroke="currentColor"
          strokeOpacity="0.22"
        />
        <path
          d="M7 16H13L17 11H25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 22H15L19 18H25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <circle cx="13" cy="16" r="2.6" fill="currentColor" />
        <circle cx="17" cy="11" r="2.6" fill="currentColor" fillOpacity="0.78" />
        <circle cx="19" cy="18" r="2.6" fill="currentColor" fillOpacity="0.55" />
      </g>
      {!compact ? (
        <text
          x="46"
          y="21"
          fill="currentColor"
          fontFamily='"Avenir Next","Segoe UI","Helvetica Neue",Arial,sans-serif'
          fontSize="17"
          fontWeight="600"
          letterSpacing="0.02em"
        >
          Provenance
        </text>
      ) : null}
    </svg>
  );
}
