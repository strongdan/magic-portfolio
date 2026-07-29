export type ReviewStatus = "unreviewed" | "needs_review" | "approved" | "rejected" | "superseded";
export type ConfidenceLevel = "high" | "medium" | "low" | "unknown";
export type EvidenceStatus = "supported" | "partially_supported" | "unsupported" | "contradicted" | "stale" | "missing";
export type ProductId = "legacy-parity-room" | "agent-safe-data-gateway" | "public-data-evidence-room" | "knowledge-succession-room" | "policy-impact-mapper";
export type BuyerRole = "public agency" | "modernization firm" | "regulated organization" | "consultant" | "IT leader" | "policy/program manager";
export interface Product { id: ProductId; rank: number; name: string; tagline: string; buyer: string; price: string; accent: string; nav: string[]; metrics: { label: string; value: string }[]; records: { title: string; detail: string; status: ReviewStatus | EvidenceStatus; meta: string }[]; api: string[]; }
export interface ReviewInput { id: string; status: ReviewStatus; note?: string; }
export interface AnalysisRun { id: string; state: "queued" | "processing" | "complete" | "failed"; progress: number; message: string; }
