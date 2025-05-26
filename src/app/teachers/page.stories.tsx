import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import RootLayout from "../../lib/storybook/root-layout";
import Page from "./page";

const meta: Meta<typeof Page> = {
	component: Page,
	parameters: {
		layout: "fullscreen",
		decorators: [
			(Story: typeof Page) => (
				<RootLayout>
					<Story />
				</RootLayout>
			),
		],
	},
};

export default meta;

type Story = StoryObj<typeof Page>;

export const 通常: Story = {};
