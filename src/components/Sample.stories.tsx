import type { ComponentStoryObj } from "@storybook/react";
import { Sample } from "./Sample";

type Story = ComponentStoryObj<typeof Sample>;

const config = {
	component: Sample,
	args: { title: "Next.jsサンプル", description: "設定楽ちん" },
};
export default config;

export const Default: Story = {};
