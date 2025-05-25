import type { Parameters } from "@storybook/react";

export const parameters: Parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
export const tags = ["autodocs"];
