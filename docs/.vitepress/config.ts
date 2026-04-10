import { defineConfig } from "vitepress";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPagesSite = repository?.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS
  ? isUserOrOrgPagesSite || !repository
    ? "/"
    : `/${repository}/`
  : "/";

export default defineConfig({
  title: "@prastavna/icons",
  description: "Framework-agnostic SVG music notation icons with outline and filled variants.",
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api" },
      { text: "Gallery", link: "/gallery" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Usage", link: "/guide/usage" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "API", link: "/api" },
          { text: "Gallery", link: "/gallery" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © Prastavna",
    },
  },
});
