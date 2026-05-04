import { expect, test } from "@playwright/test";

test("opens visual preview for Filter Rescue Lite", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Filter Rescue Lite" })).toBeVisible();
  await expect(page.getByText("Preview zero-result filter paths and rescue shoppers before collection filters dead-end.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
