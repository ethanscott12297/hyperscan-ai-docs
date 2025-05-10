import { defineConfig } from "vocs";

export default defineConfig({
  aiCta: false,
  title: "Hyperscan",
  iconUrl: {
    light: "icon-light.svg",
    dark: "icon-dark.svg",
  },
  logoUrl: {
    light: "logo-dark.svg",
    dark: "logo-light.svg",
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
    {
      text: "API & SDK",
      link: "/business/api-sdk",
    },
    {
      text: "Troubleshooting",
      items: [
        {
          text: "Common Issues",
          link: "/business/troubleshooting/common-issues",
        },
        {
          text: "Contact Support",
          link: "/business/troubleshooting/contact-support",
        },
      ],
    },
    {
      text: "Partnerships",
      items: [
        {
          text: "How to Partner",
          link: "/business/partnerships/how-to-partner",
        },
        {
          text: "Partner Benefits",
          link: "/business/partnerships/benefits",
        },
      ],
    },
  ],
});
