import '../styles/home.css';
export default function Home() {
	return (
		<div>
			<div id="home" className="banner-ppal w-screen h-[850px]">
				<div className="banner__container w-full h-full flex items-center gap-4">
					<div className="banner__text w-full">
						<h1 className="text-xl sm:text-2xl mb-10 sm:mb-4">
							Descubre el camino hacia el éxito financiero de tu empresa
						</h1>
						<p className="mb-4 text-[20px] sm:text-base">
							Somos tu despacho contable de confianza en Guadalajara.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
