export type ReviewStatus = "unreviewed" | "needs_review" | "approved" | "rejected" | "superseded";
export type ConfidenceLevel = "high" | "medium" | "low" | "unknown";
export type EvidenceStatus = "supported" | "partially_supported" | "unsupported" | "contradicted" | "stale" | "missing";
export type ProductId = "legacy-parity-room" | "main-street-continuity" | "local-compliance-concierge" | "public-data-evidence-room" | "policy-impact-mapper";
export type BuyerRole = "public agency" | "modernization firm" | "regulated organization" | "consultant" | "IT leader" | "policy/program manager" | "business owner" | "CPA/advisor" | "compliance/operations";
export interface Product { id: ProductId; rank: number; name: string; tagline: string; description: string; buyer: string; price: string; accent: string; demoUrl: string; nav: string[]; metrics: { label: string; value: string }[]; records: { title: string; detail: string; status: ReviewStatus | EvidenceStatus; meta: string }[]; api: string[]; }
export interface ReviewInput { id: string; status: ReviewStatus; note?: string; }
export interface AnalysisRun { id: string; state: "queued" | "processing" | "complete" | "failed"; progress: number; message: string; }
