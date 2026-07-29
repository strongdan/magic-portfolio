import { describe, expect, it } from "vitest";
import { statusLabel } from "../packages/ui/src/index";

describe("shared status vocabulary", () => {
  it("maps review states to readable labels", () => {
    expect(statusLabel("needs_review")).toBe("Needs review");
    expect(statusLabel("approved")).toBe("Approved");
  });
  it("does not hide unknown future states", () => {
    expect(statusLabel("future_state")).toBe("Unknown");
  });
});
