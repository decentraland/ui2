import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-typescript",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        ],
      })
    }
    return config
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
    checkOptions: {},
  },

  docs: {
    defaultName: "Documentation",
  },

  features: {
    outline: false,
  },
}
export default config
