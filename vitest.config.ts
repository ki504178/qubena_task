import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@/": "/src/",
		},
	},
	test: {
		globals: true,
		environment: "happy-dom",
		root: "src",
		setupFiles: ["./vitest.setup.mts"],
		include: ["**/*.test.ts", "**/*.test.tsx"],
		exclude: ["node_modules"],
	},
});
