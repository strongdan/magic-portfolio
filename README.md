# Venture Lab

Venture Lab is a pnpm/Turborepo monorepo for five standalone, evidence-first product validation frontends plus a comparison portfolio:

- `apps/portfolio` — the buyer-facing comparison page
- `apps/legacy-parity-room` — rule recovery and parity evidence
- `apps/agent-safe-data-gateway` — constrained data contracts and request review
- `apps/public-data-evidence-room` — claim/source QA
- `apps/knowledge-succession-room` — evidence-linked knowledge capture
- `apps/policy-impact-mapper` — source-linked implementation planning

## Run locally

```bash
pnpm install
pnpm --filter venture-lab-portfolio dev
```

Each app is independently deployable to Vercel. See [`docs/deployment/vercel.md`](docs/deployment/vercel.md) for the root-directory map. Run `pnpm build`, `pnpm typecheck`, and `pnpm test` to validate the workspace.

All visible records are typed deterministic fixtures behind `MockProductRepository`. Analysis, review, export, and pilot-interest paths are simulated and visibly labeled. No Place Signals connection, live credentials, real file processing, authentication, billing, or production data connectors are included.

## Implementation status

This branch is the first migration slice from the original static prototype. It provides the monorepo architecture, shared design system, five distinct seeded workflows, demo state transitions, responsive navigation, pilot-interest capture, analytics seam, CI, deployment docs, and security checklist. Remaining owner decisions are recorded in [`docs/validation/README.md`](docs/validation/README.md). Production readiness still requires real Vercel previews, automated accessibility/Playwright coverage, server-side form integration, CSP review, and owner decisions.
