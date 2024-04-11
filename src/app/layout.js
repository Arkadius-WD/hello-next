export const metadata = {
	title: "Hello next!",
	description: "Our first app in Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body>{children}</body>
		</html>
	);
}
