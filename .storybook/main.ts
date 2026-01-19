import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
    "@storybook/addon-webpack5-compiler-babel",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  babel: async (options) => ({
    ...options,
    plugins: [...(options.plugins ?? []), "@emotion/babel-plugin"],
  }),

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
              plugins: ["@emotion/babel-plugin"],
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

}
export default config
