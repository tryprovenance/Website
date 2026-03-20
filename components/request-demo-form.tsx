"use client";

import type { FormEvent } from "react";

import { siteConfig } from "@/content/site";

export function RequestDemoForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const subject = `Provenance demo request from ${data.get("name") || "website visitor"}`;
    const body = [
      `Name: ${String(data.get("name") || "")}`,
      `Work email: ${String(data.get("workEmail") || "")}`,
      `Company: ${String(data.get("company") || "")}`,
      `Role: ${String(data.get("role") || "")}`,
      `Workflow of interest: ${String(data.get("workflow") || "")}`,
      "",
      "Message:",
      String(data.get("message") || ""),
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <div className="demo-form__row">
        <div className="demo-field">
          <label htmlFor="demo-name">Name</label>
          <input
            id="demo-name"
            name="name"
            type="text"
            placeholder="Jordan Lee"
            required
          />
        </div>
        <div className="demo-field">
          <label htmlFor="demo-email">Work email</label>
          <input
            id="demo-email"
            name="workEmail"
            type="email"
            placeholder="jordan@company.com"
            required
          />
        </div>
      </div>
      <div className="demo-form__row">
        <div className="demo-field">
          <label htmlFor="demo-company">Company</label>
          <input
            id="demo-company"
            name="company"
            type="text"
            placeholder="Firm or team name"
          />
        </div>
        <div className="demo-field">
          <label htmlFor="demo-role">Role</label>
          <input
            id="demo-role"
            name="role"
            type="text"
            placeholder="Risk, compliance, ops, controls"
          />
        </div>
      </div>
      <div className="demo-field">
        <label htmlFor="demo-workflow">Workflow of interest</label>
        <select
          id="demo-workflow"
          name="workflow"
          defaultValue="Risk / compliance exception review"
        >
          <option>Risk / compliance exception review</option>
          <option>AI-assisted internal approvals</option>
          <option>Controls and operational investigations</option>
          <option>Decision traceability for regulated workflows</option>
          <option>Other</option>
        </select>
      </div>
      <div className="demo-field">
        <label htmlFor="demo-message">Message</label>
        <textarea
          id="demo-message"
          name="message"
          rows={5}
          placeholder="Describe the workflow, current systems, and the kind of review or audit pressure you are dealing with."
        />
      </div>
      <div className="demo-form__footer">
        <button type="submit" className="btn magnetic" data-hover>
          Request Demo
        </button>
        <p>Opens an email draft to {siteConfig.email}.</p>
      </div>
    </form>
  );
}
