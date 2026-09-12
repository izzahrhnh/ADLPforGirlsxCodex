type SiftLogoProps = { compact?: boolean; className?: string };

export function SiftLogo({ compact = false, className = "" }: SiftLogoProps) {
  return <span className={`sift-logo ${className}`} aria-label="SIFT">
    <svg className="sift-mark" viewBox="0 0 40 40" role="img" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="currentColor" />
      <path d="M11 12h18l-7.2 8.1v6.3l-3.6 2.1v-8.4L11 12Z" fill="white" />
      <circle cx="27.5" cy="12.5" r="2.5" fill="#bfe9cb" />
    </svg>
    {!compact && <span className="sift-wordmark">SIFT</span>}
  </span>;
}
