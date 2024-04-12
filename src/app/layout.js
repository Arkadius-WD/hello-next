import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata = {
	title: "Hello next!",
	description: "Our first app in Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
