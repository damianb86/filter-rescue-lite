export const APP_CONFIG = {
  name: "Filter Rescue Lite",
  shortName: "Filter Rescue",
  slug: "filter-rescue-lite",
  tagline: "Preview zero-result filter paths and rescue shoppers before collection filters dead-end.",
  problem: "Native filters can still lead shoppers into invalid combinations, confusing out-of-stock states or zero-result paths.",
  persona: "Merchandiser optimizing collection browsing and product discovery on a theme storefront.",
  value: "A theme-aware QA workbench for filter combinations, rescue suggestions and empty-state messaging.",
  primaryFlow: "Scan filter combinations, review zero-result paths, decide rescue behavior and test on Dawn before theme rollout.",
  color: "#db2777",
  mainObject: "Filter rescue path",
  workspaceLabel: "Rescue planner",
  settingsLabel: "Filter behavior",
  requiredScopes: ["read_products"],
  doNotRequestScopes: ["write_products","read_orders","read_customers"],
  integrations: [
  "Admin product and collection reads for option/tag availability modeling.",
  "Theme app extension later alters filter UI and zero-result messaging.",
  "Search & Discovery behavior remains native; app only layers preview/rescue UX."
],
  mvpFeatures: [
  "Dashboard for zero-result paths and top risky filters.",
  "Rescue planner table with suggested closest valid filters.",
  "Settings for available-only, hide-impossible and empty-state copy.",
  "Theme-risk documentation and Dawn-first limitation."
],
  outOfScope: [
  "Replacing Shopify Search & Discovery.",
  "Guaranteed support for every custom faceted-search implementation.",
  "Search indexing control."
],
  futureFeatures: [
  "Theme app extension for dynamic filter hiding.",
  "Collection-specific rescue rules.",
  "Analytics for rescued zero-result attempts."
],
  screens: [
  "Dashboard: risky filters and zero-result coverage.",
  "Rescue planner: invalid combination table.",
  "Filter behavior: rescue settings.",
  "Help/QA: Dawn and custom theme test plan."
],
  sampleRows: [
  [
    "Size XL + Color Green",
    "Zero results",
    "High",
    "Suggest Blue"
  ],
  [
    "Material Linen + Sale",
    "Low inventory",
    "Medium",
    "Keep visible"
  ],
  [
    "Brand Acme + Kids",
    "Impossible path",
    "High",
    "Hide option"
  ]
],
  metrics: [
  [
    "Paths scanned",
    "780"
  ],
  [
    "Zero-result paths",
    "64"
  ],
  [
    "Rescue suggestions",
    "31"
  ]
],
  settingsFields: {
  "workflowName": "Collection filter rescue",
  "thresholdLabel": "Max zero-result paths",
  "thresholdDefault": "10",
  "ownerEmail": "growth@example.com"
},
  risks: [
  "Storefront filter implementation varies by theme and apps.",
  "Aggressive hiding can confuse shoppers if availability data is stale."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
