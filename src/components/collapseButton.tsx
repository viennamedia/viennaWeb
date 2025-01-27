"use client";

export default function CollapseButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="text-primary hover:underline mb-4"
    >
      ← Collapse
    </button>
  );
}
