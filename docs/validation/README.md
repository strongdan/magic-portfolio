# Product validation

The portfolio is designed to distinguish demand across five concepts. Record `product_card_opened`, `demo_started`, `key_workflow_completed`, `pilot_form_opened`, `pilot_form_submitted`, `comparison_used`, `pricing_viewed`, `product_switched`, and `feedback_submitted` through the vendor-neutral `@venture-lab/analytics` package.

The first validation cut should compare visits, demo starts, completed review flows, pilot inquiries, and buyer role. Use indicative prices as reaction prompts, not quotes. Do not install session replay by default and do not collect sensitive demo uploads.

## Owner decisions to confirm

- Keep the `magic-portfolio` repository name or rename it to `venture-lab`.
- Public versus private GitHub visibility and whether all demos are public.
- Analytics provider and pilot-form destination.
- Whether pilot authentication should use Clerk later.
- Shared Venture Lab identity versus custom product brands.
- Whether Vercel projects belong to the current Pro team.
- Which product earns the first backend and outreach campaign.
- Whether mock uploads remain simulated and whether pilot prices are public.

Default recommendation: keep one Venture Lab identity, use public frictionless demos, keep source private until positioning is reviewed, use Vercel projects in the current Pro account, and build a real backend only for the first product with credible buyer interest.
