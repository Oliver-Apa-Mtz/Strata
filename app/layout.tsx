import type { Metadata } from "next";
import { store } from '../store/store';
import "./globals.css";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReduxProvider from '../components/ReduxProvider';

export const metadata: Metadata = {
	title: 'Strata - Soluciones Inmobiliarias de Alto Valor en Mazatlán, Sinaloa',
	description: 'Strata, fundada en 2023, ofrece soluciones inmobiliarias innovadoras con más de 10 años de experiencia en la comercialización de proyectos exclusivos y administración de propiedades vacacionales en Mazatlán.',

	openGraph: {
		title: 'Strata - Soluciones Inmobiliarias de Alto Valor en Mazatlán',
		description: 'Empresa fundada en 2023, con más de 10 años de experiencia en el sector inmobiliario, ofreciendo proyectos exclusivos y administración de propiedades vacacionales en Mazatlán, Sinaloa.',
		url: 'https://www.strata.com',
		type: 'website',
		locale: 'es_MX',
		siteName: 'Strata Inmobiliaria',
		images: [
			{
				url: 'https://www.strata.com/img/banner-home.webp',
				width: 1200,
				height: 630,
				alt: 'Strata - Soluciones Inmobiliarias en Mazatlán',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Strata - Soluciones Inmobiliarias en Mazatlán',
		description: 'Especialistas en comercialización de proyectos exclusivos y administración de propiedades vacacionales en Mazatlán. Miembros de AMPI.',
		images: [
			'https://www.strata.com/img/image-post-1.webp',
		],
		site: '@stratainmobiliaria', // Twitter
	},

	// Keywords
	keywords: ['Inmobiliaria Mazatlán', 'Soluciones Inmobiliarias', 'Proyectos Exclusivos', 'Propiedades Vacacionales', 'AMPI', 'Inversiones Seguras'],

	// Robots
	robots: {
		index: true,
		follow: true,
	},

	creator: 'Strata Inmobiliaria',
	publisher: 'Strata',
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
				<ReduxProvider>
					{children}
				</ReduxProvider>
				<Footer />
			</body>
		</html>
	);
}
