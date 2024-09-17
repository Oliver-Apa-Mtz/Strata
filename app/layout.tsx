import type { Metadata } from "next";
import "./globals.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
	title: "Strata",
	description: "Soluciones inmobiliarias de alto valor",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
