import path from "node:path";

module.exports = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-mdx-gfm",
		"msw-storybook-addon",
		"@chromatic-com/storybook",
	],

	webpackFinal: async (config) => {
		config.resolve.alias = {
			...(config.resolve.alias || []),
			"@": path.resolve(__dirname, "../src"),
		};
		return config;
	},

	framework: {
		name: "@storybook/nextjs",
		options: {},
	},

	docs: {},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},

	staticDirs: ["../public"],
};
