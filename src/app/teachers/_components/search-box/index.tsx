import { type ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./search-box.module.css";

const LABEL = "名前、ログインIDで検索";

type Props = ComponentPropsWithoutRef<"input">;

const SearchBox = forwardRef<HTMLInputElement, Props>(
	({ onChange, ...props }, ref) => {
		return (
			<div className={styles.searchBox}>
				<input
					{...props}
					role="searchbox"
					className={styles.searchInput}
					type="text"
					placeholder={LABEL}
					onChange={onChange}
				/>
				<img
					src="/assets/teachers/icon-search.svg"
					width={24}
					height={24}
					alt={LABEL}
					className={styles.searchIcon}
				/>
			</div>
		);
	},
);

export default SearchBox;
