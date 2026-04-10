// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const barChart = createIcon({
  name: "bar-chart",
  category: "data",
  variant: "outline",
  svgContent:
    '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
});

export const barChartFilled = createIcon({
  name: "bar-chart-filled",
  category: "data",
  variant: "filled",
  svgContent: `<line ${S} x1="12" x2="12" y1="20" y2="10"/><line ${S} x1="18" x2="18" y1="20" y2="4"/><line ${S} x1="6" x2="6" y1="20" y2="16"/>`,
});

export const lineChart = createIcon({
  name: "line-chart",
  category: "data",
  variant: "outline",
  svgContent: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
});

export const lineChartFilled = createIcon({
  name: "line-chart-filled",
  category: "data",
  variant: "filled",
  svgContent: `<path ${S} d="M3 3v18h18"/><path ${S} d="m19 9-5 5-4-4-3 3"/>`,
});

export const pieChart = createIcon({
  name: "pie-chart",
  category: "data",
  variant: "outline",
  svgContent: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
});

export const pieChartFilled = createIcon({
  name: "pie-chart-filled",
  category: "data",
  variant: "filled",
  svgContent: `<path ${S} d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path ${S} d="M22 12A10 10 0 0 0 12 2v10z"/>`,
});

export const table = createIcon({
  name: "table",
  category: "data",
  variant: "outline",
  svgContent:
    '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
});

export const tableFilled = createIcon({
  name: "table-filled",
  category: "data",
  variant: "filled",
  svgContent: `<path ${S} d="M12 3v18"/><rect ${S} width="18" height="18" x="3" y="3" rx="2"/><path ${S} d="M3 9h18"/><path ${S} d="M3 15h18"/>`,
});

export const database = createIcon({
  name: "database",
  category: "data",
  variant: "outline",
  svgContent:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
});

export const databaseFilled = createIcon({
  name: "database-filled",
  category: "data",
  variant: "filled",
  svgContent: `<ellipse ${S} cx="12" cy="5" rx="9" ry="3"/><path ${S} d="M3 5V19A9 3 0 0 0 21 19V5"/><path ${S} d="M3 12A9 3 0 0 0 21 12"/>`,
});

export const server = createIcon({
  name: "server",
  category: "data",
  variant: "outline",
  svgContent:
    '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
});

export const serverFilled = createIcon({
  name: "server-filled",
  category: "data",
  variant: "filled",
  svgContent: `<rect ${S} width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect ${S} width="20" height="8" x="2" y="14" rx="2" ry="2"/><line ${S} x1="6" x2="6.01" y1="6" y2="6"/><line ${S} x1="6" x2="6.01" y1="18" y2="18"/>`,
});

export const activity = createIcon({
  name: "activity",
  category: "data",
  variant: "outline",
  svgContent: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
});

export const activityFilled = createIcon({
  name: "activity-filled",
  category: "data",
  variant: "filled",
  svgContent: `<path ${S} d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
});

export const trendingUp = createIcon({
  name: "trending-up",
  category: "data",
  variant: "outline",
  svgContent:
    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
});

export const trendingUpFilled = createIcon({
  name: "trending-up-filled",
  category: "data",
  variant: "filled",
  svgContent: `<polyline ${S} points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline ${S} points="16 7 22 7 22 13"/>`,
});

export const trendingDown = createIcon({
  name: "trending-down",
  category: "data",
  variant: "outline",
  svgContent:
    '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
});

export const trendingDownFilled = createIcon({
  name: "trending-down-filled",
  category: "data",
  variant: "filled",
  svgContent: `<polyline ${S} points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline ${S} points="16 17 22 17 22 11"/>`,
});

export const gitBranch = createIcon({
  name: "git-branch",
  category: "data",
  variant: "outline",
  svgContent:
    '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
});

export const gitBranchFilled = createIcon({
  name: "git-branch-filled",
  category: "data",
  variant: "filled",
  svgContent: `<line ${S} x1="6" x2="6" y1="3" y2="15"/><circle ${S} cx="18" cy="6" r="3"/><circle ${S} cx="6" cy="18" r="3"/><path ${S} d="M18 9a9 9 0 0 1-9 9"/>`,
});
