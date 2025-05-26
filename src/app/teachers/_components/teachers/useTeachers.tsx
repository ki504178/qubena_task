import { useEffect, useState } from "react";
import type { Teacher } from ".";

const SEARCH_TEXT_PREFIX = {
	name: "名前：",
	loginId: "ログインID：",
} as const;

const URL =
	"https://us-central1-compass-hr.cloudfunctions.net/mock/facilitators";

export default function useTeachers() {
	const [teachers, setTeachers] = useState<Teacher[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>("");

	const [searchText, setSearchText] = useState<string>("");
	const [sort, setSort] = useState<{
		key: "name" | "loginId" | "";
		order: "asc" | "desc" | "";
	}>({ key: "", order: "" });
	const [currentPage, setCurrentPage] = useState(1);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const query = new URLSearchParams({
			...(searchText && {
				name_like: searchText.trim(),
			}),
			...(sort.key &&
				sort.order && {
					_sort: sort.key,
					_order: sort.order,
				}),
		});
		async function fetchTeachers() {
			try {
				const response = await fetch(`${URL}?${query.toString()}`, {
					method: "GET",
				});
				const data = await response.json();
				setTeachers(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		}

		void fetchTeachers();
	}, [searchText, sort, currentPage]);

	return {
		teachers,
		loading,
		error,
		setSearchText,
		sort,
		setSort,
		currentPage,
		setCurrentPage,
	};
}
