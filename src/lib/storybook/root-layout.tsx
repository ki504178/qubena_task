import "@/styles/reset.css";
import "@/styles/global.css";

// app/layout.tsxを利用するのはNext.jsのApp routerの仕様の考慮が必要なため、Story用として別途定義
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
