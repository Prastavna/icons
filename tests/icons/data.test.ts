import { describe, expect, test } from "vite-plus/test";
import {
  barChart,
  barChartFilled,
  lineChart,
  lineChartFilled,
  pieChart,
  pieChartFilled,
  table,
  tableFilled,
  database,
  databaseFilled,
  server,
  serverFilled,
  activity,
  activityFilled,
  trendingUp,
  trendingUpFilled,
  trendingDown,
  trendingDownFilled,
  gitBranch,
  gitBranchFilled,
} from "../../src/icons/data/index.ts";

const outlineIcons = [
  { icon: barChart, name: "bar-chart" },
  { icon: lineChart, name: "line-chart" },
  { icon: pieChart, name: "pie-chart" },
  { icon: table, name: "table" },
  { icon: database, name: "database" },
  { icon: server, name: "server" },
  { icon: activity, name: "activity" },
  { icon: trendingUp, name: "trending-up" },
  { icon: trendingDown, name: "trending-down" },
  { icon: gitBranch, name: "git-branch" },
];

const filledIcons = [
  { icon: barChartFilled, name: "bar-chart-filled" },
  { icon: lineChartFilled, name: "line-chart-filled" },
  { icon: pieChartFilled, name: "pie-chart-filled" },
  { icon: tableFilled, name: "table-filled" },
  { icon: databaseFilled, name: "database-filled" },
  { icon: serverFilled, name: "server-filled" },
  { icon: activityFilled, name: "activity-filled" },
  { icon: trendingUpFilled, name: "trending-up-filled" },
  { icon: trendingDownFilled, name: "trending-down-filled" },
  { icon: gitBranchFilled, name: "git-branch-filled" },
];

describe("data icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("data");
    expect(icon.variant).toBe("outline");
    expect(icon.viewBox).toBe("0 0 24 24");
  });

  test.each(outlineIcons)("$name returns valid SVG", ({ icon }) => {
    const svg = icon();
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
    expect(svg).toContain('stroke="currentColor"');
    expect(svg).toContain('fill="none"');
  });
});

describe("data icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("data");
    expect(icon.variant).toBe("filled");
    expect(icon.viewBox).toBe("0 0 24 24");
  });

  test.each(filledIcons)("$name returns valid SVG", ({ icon }) => {
    const svg = icon();
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
    expect(svg).toContain('fill="currentColor"');
    expect(svg).toContain('stroke="none"');
  });
});
