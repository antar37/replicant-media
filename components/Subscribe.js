const SERVICES = [
  "Website",
  "SEO",
  "Google Ads",
  "Reporting",
  "Automation",
  "Not sure yet",
];

const BUDGETS = [
  "Under $2k",
  "$2k–$5k",
  "$5k–$12k",
  "$12k+",
  "Not sure yet",
];

const TIMELINES = [
  "ASAP",
  "This month",
  "Next 1–3 months",
  "Flexible",
];

export default function Subscribe() {
  return (
    <form action="/api/contact" method="post" className="flex flex-col gap-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
        <span>{"// "}replicant_intake.jotform</span>
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-acid-deep block animate-pulse" aria-hidden />
          Jotform handoff
        </span>
      </div>
      <span className="rule" />

      <div className="border-2 border-ink bg-bone-soft p-4 font-mono text-xs leading-relaxed text-ink">
        <span className="text-acid font-bold uppercase tracking-[0.18em]">Send the messy version.</span>{" "}
        This goes to Replicant Media through Jotform so the brief is stored, searchable, and easy to follow up.
      </div>

      <input type="text" name="websiteTrap" className="hidden" tabIndex="-1" autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" required>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            className="field"
          />
        </Field>

        <Field label="Email" required>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className="field"
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company">
          <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Business name"
            className="field"
          />
        </Field>

        <Field label="Website / URL">
          <input
            type="url"
            name="url"
            autoComplete="url"
            placeholder="https://example.com"
            className="field"
          />
        </Field>
      </div>

      <fieldset className="space-y-3">
        <Legend>What needs fixing?</Legend>
        <Label>What needs fixing?</Label>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
          {SERVICES.map((service) => (
            <CheckChip key={service} name="services" value={service}>
              {service}
            </CheckChip>
          ))}
        </div>
      </fieldset>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Budget range">
          <select name="budget" className="field" defaultValue="">
            <option value="">Select one</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Timeline">
          <select name="timeline" className="field" defaultValue="">
            <option value="">Select one</option>
            {TIMELINES.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="What is stuck?" required>
        <textarea
          rows={6}
          name="projectBrief"
          required
          placeholder="Tell me what is not working: the site, leads, ads, SEO, reporting, follow-up, or the workflow everyone keeps doing by hand."
          className="field"
        />
      </Field>

      <Field label="Best next step">
        <textarea
          rows={3}
          name="bestNextStep"
          placeholder="Optional: what would make this useful — audit, rebuild, landing page, tracking fix, automation, etc."
          className="field"
        />
      </Field>

      <div className="pt-2 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
          // stored in jotform
        </p>
        <button type="submit" className="btn-acid">
          <span className="w-2 h-2 bg-ink block" aria-hidden />
          <span>Send brief</span>
          <span aria-hidden>→</span>
        </button>
      </div>

      <p className="font-mono text-[11px] uppercase tracking-[0.16em] leading-relaxed text-ink-muted">
        Prefer the hosted version?{" "}
        <a
          href="/api/contact/form"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-acid-deep transition-colors"
        >
          Open it on Jotform
        </a>
        .
      </p>
    </form>
  );
}

function Label({ children }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
      {children}
    </span>
  );
}

function Legend({ children }) {
  return <legend className="sr-only">{children}</legend>;
}

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-2.5">
      <Label>
        {label}
        {required && <span className="text-acid-deep">&nbsp;*</span>}
      </Label>
      {children}
    </label>
  );
}

function CheckChip({ name, value, children }) {
  return (
    <label className="chip cursor-pointer has-[:checked]:bg-acid has-[:checked]:text-bone has-[:checked]:border-acid">
      <input type="checkbox" name={name} value={value} className="sr-only" />
      <span>{children}</span>
    </label>
  );
}
