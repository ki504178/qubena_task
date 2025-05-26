"use client";
import clsx from "clsx";
import React, { useState, useMemo } from "react";
import Loader from "../loader";
import Pagination from "../pagination";
import SearchBox from "../search-box";
import styles from "./teachers.module.css";
import { useDebounce } from "./useDebounce";
import useTeachers from "./useTeachers";

export type Teacher = {
	id: number;
	name: string;
	loginId: string;
};

const PAGE_SIZE = 20;

export default function Teachers() {
	const {
		teachers,
		loading,
		error,
		setSearchText,
		sort,
		setSort,
		currentPage,
		setCurrentPage,
	} = useTeachers();
	const pageCount =
		teachers.length > 0 ? Math.ceil(teachers.length / PAGE_SIZE) : 1;
	const targetTeachers = teachers.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE,
	);

	const onSort = (key: "name" | "loginId") => {
		setSort((prev) => {
			const isSameKey = prev.key === key;
			const order = !isSameKey ? "asc" : prev.order === "asc" ? "desc" : "asc";
			return {
				key,
				order,
			};
		});
	};

	const debounce = useDebounce();
	const onSearchChange = (value: string) => {
		// 入力中の変更で無駄にAPIリクエストしないようにする
		debounce(() => setSearchText(value));
	};

	const onPageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= pageCount) setCurrentPage(newPage);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={styles.title}>
					<img
						src="/assets/teachers/icon-teacher.svg"
						width={32}
						height={32}
						alt=""
					/>
					先生
				</h2>
				<SearchBox
					onChange={(e) => {
						onSearchChange(e.target.value);
					}}
				/>
			</div>
			{loading && <Loader />}
			{/* 発生しない想定だが制御は入れておく */}
			{error && (
				<span className={styles.message}>予期せぬエラーが発生しました。</span>
			)}
			{!loading && !error && targetTeachers.length === 0 && (
				<span className={styles.message}>該当するデータがありません。</span>
			)}
			{!loading && !error && targetTeachers.length > 0 && (
				<>
					<table className={styles.teacherTable}>
						<thead>
							<tr className={styles.trHeader}>
								<th className={styles.thName}>
									名前
									<button
										className={styles.sortIconButton}
										type="button"
										onClick={() => onSort("name")}
									>
										<img
											src="/assets/teachers/icon-angle-down.svg"
											width={16}
											height={16}
											alt="名前でソート"
											className={
												sort.key === "name" && sort.order === "asc"
													? styles.sortIconUp
													: undefined
											}
										/>
									</button>
								</th>
								<th className={styles.thOther}>
									ログインID
									<button
										className={clsx(
											styles.sortIconButton,
											styles.sortIconButtonGray,
										)}
										type="button"
										onClick={() => onSort("loginId")}
									>
										<img
											src="/assets/teachers/icon-angle-down-gray.svg"
											width={16}
											height={16}
											alt="ログインIDでソート"
											className={
												sort.key === "loginId" && sort.order === "asc"
													? styles.sortIconUp
													: undefined
											}
										/>
									</button>
								</th>
								<th className={styles.thOther} />
							</tr>
						</thead>
						<tbody>
							{targetTeachers.map((teacher, i) => (
								<tr
									key={teacher.id}
									className={clsx(
										styles.tBodyTr,
										i % 2 === 0 ? styles.trEven : undefined,
									)}
								>
									<td>{teacher.name}</td>
									<td>{teacher.loginId}</td>
									<td />
								</tr>
							))}
						</tbody>
					</table>
					<div className={styles.footer}>
						{teachers.length}件中 {(currentPage - 1) * PAGE_SIZE + 1}〜
						{(currentPage - 1) * PAGE_SIZE + targetTeachers.length}件を表示
						<Pagination
							currentPage={currentPage}
							pageCount={pageCount}
							onPageChange={(page) => onPageChange(page)}
						/>
					</div>
				</>
			)}
		</div>
	);
}
