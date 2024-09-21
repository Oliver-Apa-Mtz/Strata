"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSpring, animated } from '@react-spring/web';

import '../../styles/home.css';
const PropertyItem = dynamic(() => import('../../components/PropertyItem'), {
	ssr: false,
});

import Equipo1 from '../../assets/img/equipo-1.webp';
import Equipo2 from '../../assets/img/equipo-2.webp';
import Equipo3 from '../../assets/img/equipo-3.webp';
import Equipo4 from '../../assets/img/equipo-4.webp';
import Equipo5 from '../../assets/img/equipo-5.webp';
import Equipo6 from '../../assets/img/equipo-6.webp';

const Agentes = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 500;
		setIsVisibleBanner2(scrollPosition > headerHeight);
	};

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();
		setIsVisible(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className='lg:pt-[100px] pt-[80px]'>
			<div id="agente" className="banner-ppal w-screen h-[850px]">
				<div className="container h-full flex items-center gap-4">
					<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
						<div className="banner__text w-full">
							<h1 className="mb-10 title-ppal">
								Nuestros agentes
							</h1>
							<h2 className="mb-6 sm:text-base subtitle">
								Soluciones inmobiliarias de alto valor en Mazatlán, Sinaloa.
							</h2>
						</div>
					</animated.div>
				</div>
			</div>

			<div className='banner-line py-20'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mb-12'>
							Equipo de trabajo
						</p>
					</div>
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
						<div className='w-full p-6 flex gap-2 flex-wrap justify-between'>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Equipo1.src}
									title={'Lorem ipsum dolor sit amet'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Equipo2.src}
									title={'Lorem ipsum dolor sit amet'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Equipo3.src}
									title={'Lorem ipsum dolor sit amet'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Equipo4.src}
									title={'Lorem ipsum dolor sit amet'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Equipo5.src}
									title={'Lorem ipsum dolor sit amet'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Equipo6.src}
									title={'Lorem ipsum dolor sit amet'}
								/>
							</div>
						</div>
					</animated.div>
				</div>
			</div>
		</div>
	)
}

export default Agentes