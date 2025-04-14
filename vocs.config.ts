import { defineConfig } from "vocs";

export default defineConfig({
  aiCta: false,
  title: "Hyperscan",
  // iconUrl: {
  //   light: "text-logo-white.svg",
  //   dark: "text-logo-black.svg",
  // },
  logoUrl: {
    light: "text-logo-black.svg",
    dark: "text-logo-white.svg",
  },
  description: "Hyperscan developer hub.",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
    },
    {
      text: "Developer",
      collapsed: false,
      items: [
        {
          text: "Code conventions",
          items: [
            {
              text: "Typescript",
              link: "/workflow/code-conventions/typescript",
            },
            { text: "Python", link: "/workflow/code-conventions/python" },
            { text: "Golang", link: "/workflow/code-conventions/golang" },
            { text: "Dart", link: "/workflow/code-conventions/dart" },
          ],
        },
        {
          text: "Code Review",
          link: "/workflow/code-review",
        },
        {
          text: "Version Control",
          link: "/workflow/version-control",
        },
      ],
    },
  ],
});
