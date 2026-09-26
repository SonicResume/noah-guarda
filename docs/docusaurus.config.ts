import type * as Preset from "@docusaurus/preset-classic";
import * as path from "node:path";
import type { Config, PluginConfig } from "@docusaurus/types";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "NOAH Guardra",
  tagline: "NVR With Realtime Object Detection for IP Cameras",
  url: "https://www.sonicresume.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/branding/noah-logo.png",
  organizationName: "sonicresume",
  projectName: "frigate",
  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs",
    "@inkeep/docusaurus/chatButton",
    "@inkeep/docusaurus/searchBar",
  ],
  markdown: {
    mermaid: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
      }
    },
  },
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    inkeepConfig: {
      baseSettings: {
        apiKey: "b1a4c4d73c9b48aa5b3cdae6e4c81f0bb3d1134eeb5a7100",
        integrationId: "cm6xmhn9h000gs601495fkkdx",
        organizationId: "org_map2JQEOco8U1ZYY",
        primaryBrandColor: "#010101",
      },
      aiChatSettings: {
        chatSubjectName: "NOAH Guardra",
        botAvatarSrcUrl: "/img/branding/noah-logo.png",
        getHelpCallToActions: [
        ],
        quickQuestions: [
          "How to configure and setup camera settings?",
          "How to setup notifications?",
          "Supported builtin detectors?",
          "How to restream video feed?",
          "How can I get sound or audio in my recordings?",
        ],
      },
    },
    prism: {
      magicComments:[
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'highlight-error-line',
        },
      ],
      additionalLanguages: ["bash", "json"],
    },
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "rust",
        language: "rust",
        logoClass: "rust",
      },
    ],
    navbar: {
      title: "NOAH Guardra",
      logo: {
        alt: "NOAH Guardra",
        src: "img/branding/noah-logo.png",
        srcDark: "img/branding/noah-logo.png",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
          ]
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NOAH Guardra.`,
    },
  },
  plugins: [
    path.resolve(__dirname, "plugins", "raw-loader"),
    path.resolve(__dirname, "plugins", "yaml-loader"),
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // configured for preset-classic
        config: {
          frigateApi: {
            specPath: "static/frigate-api.yaml",
            outputDir: "docs/integrations/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: true,
              sidebarCollapsed: true,
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ] as PluginConfig[],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          sidebarCollapsible: false,
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default async function createConfig() {
  return config;
}
