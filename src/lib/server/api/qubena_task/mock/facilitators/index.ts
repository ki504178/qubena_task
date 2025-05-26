import { http, HttpResponse, delay } from "msw";
import { fixtureMockFacilitators } from "./fixture.mock";

// 利用していない関数だが、試していたMSWハンドラの実装を参考として残す
export const mockGetMockFacilitators = (args?: {
	mockFn?: () => void;
	custom?: { status?: number; response?: unknown; delay?: number };
}) => {
	return http.get(
		"https://us-central1-compass-hr.cloudfunctions.net/mock/facilitators",
		async () => {
			console.log("mockGetMockFacilitators called", args);

			args?.mockFn?.();

			if (args?.custom?.delay) {
				await delay(args.custom.delay);
			}

			return HttpResponse.json(
				args?.custom?.response ?? fixtureMockFacilitators,
				{ status: args?.custom?.status ?? 200 },
			);
		},
	);
};
