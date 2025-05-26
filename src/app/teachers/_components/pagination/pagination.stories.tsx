import type { Meta, StoryObj } from "@storybook/react";
import Page from ".";

const meta: Meta<typeof Page> = {
	component: Page,
	args: {
		pageCount: 5,
		currentPage: 1,
	},
};

export default meta;

type Story = StoryObj<typeof Page>;

export const 最初のページ: Story = {};

export const 最後のページ: Story = {
	args: {
		currentPage: 5,
	},
};

export const 途中のページ: Story = {
	args: {
		currentPage: 3,
	},
};

export const ページ数が0以下: Story = {
	args: {
		pageCount: 0,
	},
};
