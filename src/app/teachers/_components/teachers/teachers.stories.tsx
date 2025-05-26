import { mockGetMockFacilitators } from "@/lib/server/api/qubena_task/mock/facilitators";
import RootLayout from "@/lib/storybook/root-layout";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import React from "react";
import Page from ".";

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
		msw: {
			handlers: [mockGetMockFacilitators()],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Page>;

export const 初期状態: Story = {};

export const 次のページ: Story = {
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByRole("button", { name: "次のページ" });
		await userEvent.click(
			await within(canvasElement).findByRole("button", { name: "次のページ" }),
		);
	},
};

export const 名前で検索: Story = {
	play: async ({ canvasElement }) => {
		await userEvent.type(
			within(canvasElement).getByPlaceholderText("名前、ログインIDで検索"),
			"先生_1",
		);
	},
};

export const 名前でソート: Story = {
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByRole("button", { name: "名前でソート" });
		await userEvent.click(
			await within(canvasElement).findByRole("button", {
				name: "名前でソート",
			}),
		);
	},
};

export const ログインIDでソート: Story = {
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByRole("button", {
			name: "ログインIDでソート",
		});
		await userEvent.click(
			await within(canvasElement).findByRole("button", {
				name: "ログインIDでソート",
			}),
		);
	},
};
