import clsx from "clsx";
import styles from "./pagination.module.css";

type Props = {
	pageCount: number;
	currentPage: number;
	onPageChange: (page: number) => void;
};

export default function Pagination({
	pageCount,
	currentPage,
	onPageChange,
}: Props) {
	if (pageCount <= 0) return null;
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === pageCount || pageCount === 0;

	return (
		<nav aria-label="Page navigation">
			<ul className={styles.pagination}>
				<li key="prev">
					<button
						className={clsx(styles.prevButton, isFirstPage && styles.disabled)}
						type="button"
						onClick={() => onPageChange(currentPage - 1)}
						disabled={isFirstPage}
					>
						<img
							className={styles.prevIcon}
							// デザインに有効な左向きのアイコンがなかったため、右向きのアイコンを反転して利用
							src="/assets/teachers/icon-angle-right.svg"
							width={16}
							height={16}
							alt="前のページ"
						/>
					</button>
				</li>
				{Array.from({ length: pageCount }, (_, i) => {
					const page = i + 1;
					const isActive = currentPage === page;

					return (
						<li key={i.toString()}>
							<button
								type="button"
								onClick={() => onPageChange(page)}
								className={clsx(
									styles.paginationButton,
									isActive && styles.active,
								)}
								disabled={isActive}
							>
								{page}
							</button>
						</li>
					);
				})}
				<li key="next">
					<button
						className={clsx(styles.prevButton, isLastPage && styles.disabled)}
						type="button"
						onClick={() => onPageChange(currentPage + 1)}
						disabled={isLastPage}
					>
						<img
							src="/assets/teachers/icon-angle-right.svg"
							width={16}
							height={16}
							alt="次のページ"
						/>
					</button>
				</li>
			</ul>
		</nav>
	);
}
