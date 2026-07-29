# Vercel deployment

Create six Vercel projects from this repository, each using the listed root directory:

| Project | Root directory |
| --- | --- |
| `venture-lab-portfolio` | `apps/portfolio` |
| `legacy-parity-room` | `apps/legacy-parity-room` |
| `agent-safe-data-gateway` | `apps/agent-safe-data-gateway` |
| `public-data-evidence-room` | `apps/public-data-evidence-room` |
| `knowledge-succession-room` | `apps/knowledge-succession-room` |
| `policy-impact-mapper` | `apps/policy-impact-mapper` |

Vercel should use the repository's pnpm lockfile and install from the repository root. Demo mode requires no secrets. Recommended public variables are `NEXT_PUBLIC_APP_ID`, `NEXT_PUBLIC_DEMO_MODE=true`, `NEXT_PUBLIC_ANALYTICS_ENABLED=true`, and `NEXT_PUBLIC_PILOT_FORM_ENABLED=true`. `PILOT_FORM_DESTINATION` is intentionally unset until an owner selects a managed form destination.

Preview validation: open the generated URL, verify the demo banner, mobile navigation, run-analysis completion, review action, export notice, and pilot-interest success state. Keep custom domains and production backend credentials out of scope until one concept earns credible buyer interest.

Rollback: use Vercel's deployment history to promote the previous known-good deployment. Do not use the public demos as evidence of production readiness; they are deterministic validation surfaces only.
