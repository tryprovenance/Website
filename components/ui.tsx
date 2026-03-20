import Link from "next/link";
import type { ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ActionLink({
  href,
  label,
  variant = "primary"
}: ActionLinkProps) {
  const className = `button button-${variant}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={className}>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span>{label}</span>
    </Link>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header-${align}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </div>
  );
}

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  aside
}: PageIntroProps) {
  return (
    <section className="page-intro shell">
      <div className="page-intro-copy">
        <span className="section-eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
        {actions ? <div className="page-intro-actions">{actions}</div> : null}
      </div>
      {aside ? <aside className="page-intro-aside">{aside}</aside> : null}
    </section>
  );
}

type MetricsRowProps = {
  items: readonly string[];
};

export function MetricsRow({ items }: MetricsRowProps) {
  return (
    <div className="metrics-row" role="list">
      {items.map((item) => (
        <span key={item} className="metric-chip" role="listitem">
          {item}
        </span>
      ))}
    </div>
  );
}
