import type { Parameters } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

export const parameters: Parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	loaders: [mswLoader],
};
export const tags = ["autodocs"];
