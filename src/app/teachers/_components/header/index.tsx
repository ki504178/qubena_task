import styles from "./header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContents}>
				<div className={styles.headerLeft}>
					<img
						src="/assets/teachers/logo-white.png"
						width={276}
						height={32}
						alt="Qubena MANAGER"
						className={styles.headerLogo}
					/>
					<span className={styles.headerAccountButton}>アカウント管理</span>
				</div>
				<div className={styles.headerRight}>
					<img
						src="/assets/teachers/icon-account.svg"
						width={32}
						height={32}
						alt=""
					/>
					<span aria-label="ユーザー名" className={styles.headerUserName}>
						因楠深雪
					</span>
				</div>
			</div>
		</header>
	);
}
