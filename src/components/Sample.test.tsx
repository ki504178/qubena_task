import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./Sample.stories";

const { Default } = composeStories(stories);

describe("Sample", () => {
	test("test sample", () => {
		render(<Default />);
		expect(screen.getByText(Default.args?.title as string)).toBeInTheDocument();
		expect(
			screen.getByText(Default.args?.description as string),
		).toBeInTheDocument();
	});
});
