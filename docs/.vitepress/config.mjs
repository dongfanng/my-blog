import { defineConfig } from "vitepress";
const base = "/my-blog/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "东方的博客",
  description: "随便写点东西的地方",
  base,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/dongfanng/my-blog/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/dongfanng/my-blog" }],
  },
});
