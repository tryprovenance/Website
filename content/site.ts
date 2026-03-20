export const siteConfig = {
  name: "Provenance",
  shortDescription: "Audit-ready decision traceability for AI-assisted financial workflows.",
  statement:
    "Provenance is the decision-trace layer for AI-assisted and exception-heavy financial workflows. It helps teams reconstruct, capture, review, and export the reasoning behind important decisions in an audit-ready format.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.provenance.so",
  email: "hello@provenance.so",
  socialLabel: "LinkedIn coming at launch",
  socialHref: "#",
  ctaLabel: "Request Demo",
  secondaryCtaLabel: "View Product Walkthrough"
} as const;

export const navItems = [
  { href: "/#problem", label: "Problem" },
  { href: "/#solution", label: "Solution" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-now", label: "Why Now" },
  { href: "/request-demo", label: "Request Demo" },
] as const;

export const audiences = [
  {
    title: "Pilot users and design partners",
    body:
      "Risk, compliance, operations, and controls teams that need decision traceability without adding another opaque automation layer."
  },
  {
    title: "Potential hires and technical evaluators",
    body:
      "Engineers, product builders, and AI governance operators assessing whether the company has a defensible product and systems thesis."
  },
  {
    title: "Accelerator and investor reviewers",
    body:
      "People reviewing the clarity, seriousness, and commercial logic of the company in under a few minutes."
  }
] as const;

export const conversionGoals = [
  "Request a demo",
  "Join a pilot or talk to the founder",
  "View the product walkthrough"
] as const;

export const metadataContent = {
  home: {
    title: "Audit-Ready Decision Traceability for Financial Workflows",
    description:
      "Provenance turns fragmented evidence across logs, approvals, notes, and model outputs into structured decision dossiers that teams can review, govern, and export."
  },
  product: {
    title: "Product",
    description:
      "Explore the Provenance decision dossier, evidence model, review workflow, search layer, and export-ready outputs for high-stakes financial operations."
  },
  howItWorks: {
    title: "How It Works",
    description:
      "See how Provenance ingests source data, reconstructs decision episodes, separates observed facts from inferred reasoning, and produces reviewable dossiers."
  },
  useCases: {
    title: "Use Cases",
    description:
      "See how Provenance supports risk and compliance exception review, AI-assisted approvals, controls investigations, and regulated workflow traceability."
  },
  security: {
    title: "Security & Governance",
    description:
      "Review Provenance principles for human oversight, source-linked outputs, version-aware policy references, and a pragmatic security roadmap."
  },
  about: {
    title: "About",
    description:
      "Learn why Provenance exists and why decision traceability matters now for AI-assisted and exception-heavy financial workflows."
  },
  requestDemo: {
    title: "Request Demo",
    description:
      "Talk to the founder, discuss pilot workflows, and see how Provenance can structure evidence and reasoning into reviewable decision dossiers."
  }
} as const;

export const heroProof = [
  "Evidence-linked dossiers",
  "Human review built in",
  "Export-ready outputs",
  "Designed for regulated workflows"
] as const;

export const homeProblems = [
  {
    title: "Reasoning gets lost across systems",
    body:
      "The trigger, evidence, approvals, policy references, and model output rarely live in one place long enough for anyone to inspect the full story."
  },
  {
    title: "Audit prep becomes manual reconstruction",
    body:
      "Teams end up chasing screenshots, notes, and ticket history because the original reasoning trail was never captured in a structured way."
  },
  {
    title: "AI-assisted workflows need reviewability",
    body:
      "As more decisions involve internal models, copilots, and automation, the question shifts from what happened to whether the path can be reviewed."
  },
  {
    title: "Institutional memory disappears with people",
    body:
      "When the operator, reviewer, or policy owner changes, the decision context often leaves with them."
  }
] as const;

export const dossierFields = [
  "Trigger",
  "Observed evidence",
  "Inferred reasoning",
  "Policy references",
  "Approval chain",
  "AI artifacts",
  "Outcome",
  "Review status",
  "Confidence"
] as const;

export const workflowSteps = [
  {
    title: "Ingest evidence",
    body:
      "Pull together the records, notes, model outputs, tickets, and approvals that shaped the case."
  },
  {
    title: "Reconstruct the decision episode",
    body:
      "Group related artifacts into a coherent timeline and relationship map rather than a pile of disconnected logs."
  },
  {
    title: "Generate a structured dossier",
    body:
      "Capture observed facts, inferred reasoning, relevant policy references, and decision outcomes in one reviewable object."
  },
  {
    title: "Review, export, and govern",
    body:
      "Make the result easier to inspect, challenge, approve, and export for downstream audit, controls, or governance workflows."
  }
] as const;

export const impactCards = [
  "Faster internal review",
  "Better exception documentation",
  "Stronger AI governance",
  "Preserved institutional reasoning",
  "Cleaner audit response",
  "More confidence in high-stakes workflows"
] as const;

export const useCaseCards = [
  {
    title: "Risk and compliance exception review",
    pain:
      "Exceptions are often approved across tickets, spreadsheets, and chat without a durable reasoning trail.",
    capture:
      "Trigger events, supporting evidence, policy references, reviewer comments, and final exception outcomes.",
    output: "A casefile-style dossier that supports recurring review and audit response."
  },
  {
    title: "AI-assisted approval workflows",
    pain:
      "When AI participates in approvals, teams need a clear record of evidence, model contribution, and reviewer intervention.",
    capture:
      "Model outputs, retrieved context, approval checkpoints, rationale edits, and handoff events.",
    output: "A review-ready sequence of evidence, reasoning, and human signoff."
  },
  {
    title: "Internal control investigations",
    pain:
      "Investigations require pulling context from many systems before anyone can explain what happened and why.",
    capture:
      "Operational events, policy versions, notes, escalations, and status changes around the incident.",
    output: "A stitched timeline with source links and a clean final narrative."
  },
  {
    title: "Operational decision traceability",
    pain:
      "Critical operational decisions become hard to inspect once the case is closed or the team moves on.",
    capture:
      "The originating trigger, contextual artifacts, decisions made, and subsequent changes or reversals.",
    output: "A durable reasoning record that can be reused for controls, training, and governance."
  }
] as const;

export const trustTags = [
  "source-linked",
  "reviewer verified",
  "confidence-scored",
  "exportable",
  "version-aware"
] as const;

export const productCapabilities = [
  {
    title: "Decision dossier",
    body:
      "A structured object that records what triggered the case, what evidence was observed, what reasoning was inferred, and how the case was resolved."
  },
  {
    title: "Evidence model",
    body:
      "Connect tickets, notes, approvals, policy references, model artifacts, and raw events into a coherent relationship graph with clear provenance."
  },
  {
    title: "Review workflow",
    body:
      "Keep human review inside the loop with state changes, reviewer comments, revisions, and explicit separation of draft reasoning from approved output."
  },
  {
    title: "Search and query",
    body:
      "Find comparable cases, search across dossiers, and inspect which sources or policy versions influenced a decision."
  },
  {
    title: "Export and reporting",
    body:
      "Produce a board-ready PDF, evidence appendix, or audit-ready export without manually rebuilding the narrative."
  },
  {
    title: "Product principles",
    body:
      "Precision over hype, system clarity over decoration, and reviewability over black-box automation."
  }
] as const;

export const systemSteps = [
  {
    label: "01",
    title: "Ingest source data",
    body:
      "Bring in logs, approvals, policy references, notes, case systems, and AI artifacts without collapsing them into a single untraceable blob."
  },
  {
    label: "02",
    title: "Create a decision episode",
    body:
      "Group related artifacts into one operating context so the system understands the beginning, middle, and outcome of the case."
  },
  {
    label: "03",
    title: "Separate facts from inference",
    body:
      "Keep observed evidence distinct from inferred reasoning, which makes the dossier easier to inspect and challenge."
  },
  {
    label: "04",
    title: "Review and sign off",
    body:
      "Apply human review, status transitions, and confidence markers before the output becomes a governed record."
  },
  {
    label: "05",
    title: "Search and export",
    body:
      "Make the final result queryable for future investigations and exportable for internal governance or external audit response."
  }
] as const;

export const securityPrinciples = [
  {
    title: "Observed and inferred remain distinct",
    body:
      "The system is designed to keep raw evidence separate from generated or inferred reasoning so teams can inspect which claims were directly observed."
  },
  {
    title: "Human review is part of the product",
    body:
      "Provenance is not framed as an autonomous decision-maker. Review states, comments, and signoff are first-class parts of the workflow."
  },
  {
    title: "Every output should be source-linked",
    body:
      "Key fields point back to the artifacts, notes, or policy references that informed them, which improves challengeability and trust."
  },
  {
    title: "Version awareness matters",
    body:
      "Policy references, retrieved context, and review actions should remain anchored to the version or state that existed when the case was decided."
  },
  {
    title: "Security posture should be described honestly",
    body:
      "The site should communicate principles, data handling pathways, and roadmap items clearly without implying certifications or controls that do not yet exist."
  }
] as const;

export const securityRoadmap = [
  "Deployment pathways for private cloud or VPC environments",
  "SSO and role-based access control",
  "Audit logging and retention controls",
  "Customer-managed export and evidence handling policies"
] as const;

export const aboutPoints = [
  {
    title: "Why this company exists",
    body:
      "High-stakes financial workflows increasingly combine human operators, internal policy, fragmented systems, and AI-generated context. The output matters, but the reasoning trail matters just as much."
  },
  {
    title: "Why now",
    body:
      "Teams are moving from experimentation to operational use of AI. That raises the bar for reviewability, institutional memory, and audit-ready traceability."
  },
  {
    title: "Founder perspective",
    body:
      "Provenance is being built from a product and workflow perspective: make AI-assisted work usable inside real organizations by making the evidence and reasoning inspectable."
  }
] as const;

export const timelineMoments = [
  {
    year: "Signal",
    title: "Fragmented systems already make audit response expensive",
    body:
      "Before AI enters the loop, teams already spend too much time reconstructing what happened from partial records."
  },
  {
    year: "Shift",
    title: "AI adds new context and new ambiguity",
    body:
      "Model output can accelerate work, but it also makes it harder to explain how a decision came together after the fact."
  },
  {
    year: "Response",
    title: "Decision traceability becomes infrastructure",
    body:
      "The next layer is not another black-box automation surface. It is the system that preserves decision context in a durable, reviewable format."
  }
] as const;

export const demoChecklist = [
  "Walk through one exception-heavy or AI-assisted workflow",
  "Review how evidence, policy references, and approvals map into a dossier",
  "Discuss pilot scope, security requirements, and early deployment constraints"
] as const;

export const demoFaq = [
  {
    question: "Who is the initial product for?",
    answer:
      "The initial site is written for risk, compliance, operations, controls, and AI governance teams inside financial institutions or adjacent infrastructure companies."
  },
  {
    question: "What should a pilot workflow look like?",
    answer:
      "The best starting point is a workflow where outcomes already require explanation, exception review, or audit response and where the evidence trail is currently fragmented."
  },
  {
    question: "Is the product replacing human decision-making?",
    answer:
      "No. The product is positioned around traceability and reviewability, with human oversight built directly into the workflow."
  }
] as const;

export const pagePaths = [
  "/",
  "/request-demo",
] as const;

export function buildPageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}
