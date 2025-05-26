import type { Teacher } from "@/app/teachers/_components/teachers";

export const fixtureMockFacilitators: Teacher[] = Array.from(
	{ length: 120 },
	(_, i) => ({
		name: `先生-${i + 1}`,
		loginId: `facilitator-${i + 1}`,
		id: i,
	}),
);

export const fixtureMockFacilitatorsForLongName = [
	{
		name: "長い名前の先生".repeat(50),
		loginId: "longname_teacher".repeat(50),
		id: 10000,
	},
	...fixtureMockFacilitators.slice(0, 10),
];
