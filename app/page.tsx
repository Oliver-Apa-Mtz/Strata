"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { DataList } from '../utils/data';

import '../styles/home.css';
import Button from '../components/Button';
const BannerToCall = dynamic(() => import('../components/BannerToCall'), {
	ssr: true,
});
const PropertyItem = dynamic(() => import('../components/PropertyItem'), {
	ssr: true,
});
const MapComponent = dynamic(() => import('../components/Map'), {
	ssr: false,
});

import BannerEffect1 from '../assets/img/line-effect-1.webp';
import ImageBanner1 from '../assets/img/image-post-1.webp';
import LogoAmpi from '../assets/img/icono-ampi.svg';
import BannerCall1 from '../assets/img/banner-call-1.webp';

//Propiedades
import Property1 from '../assets/img/property-1.webp';
import Property2 from '../assets/img/property-2.webp';
import Property3 from '../assets/img/property-3.webp';
import Property4 from '../assets/img/property-4.webp';
import Property5 from '../assets/img/property-5.webp';
import Property6 from '../assets/img/property-6.webp';

//Propiedades simples
import Property7 from '../assets/img/property-7.webp';
import Property8 from '../assets/img/property-8.webp';
import Property9 from '../assets/img/property-9.webp';
import Property10 from '../assets/img/property-10.webp';
import Property11 from '../assets/img/property-11.webp';
import Property12 from '../assets/img/property-12.webp';

//Socios
import LogoSocio1 from '../assets/img/logo-socio-1.svg';
import LogoSocio2 from '../assets/img/logo-socio-2.svg';
import LogoSocio3 from '../assets/img/logo-socio-3.svg';

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 500;
		setIsVisibleBanner2(scrollPosition > headerHeight);
		setIsVisibleBanner3(scrollPosition > headerHeight);
		setIsVisibleBanner4(scrollPosition > (headerHeight + 1650));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 4500));
	};

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(50px)',
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
			<div id="home" className="banner-ppal w-screen">
				<div className="container h-full flex items-center gap-4">
					<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
						<div className="banner__text w-full">
							<h1 className="mb-10 title-ppal">
								Soluciones inmobiliarias de alto valor
							</h1>
							<h2 className="mb-6 sm:text-base subtitle">
								Soluciones inmobiliarias de alto valor en Mazatlán, Sinaloa.
							</h2>
							<Button text='Shop now' type='primary' position='left' />
						</div>
					</animated.div>
				</div>
			</div>

			<div className='banner-info relative'>
				<div className='container flex justify-between lg:flex-nowrap flex-wrap'>
					<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
						<div className='banner-info__text lg:basis-1/2 basis-full'>
							<p className='banner-info__text__custom'>Quiénes Somos</p>
							<p className='banner-info__text__title my-6'>Nosotros</p>
							<p className='banner-info__text__subtitle mb-6'>
								En Strata, fundada en 2023, nuestra empresa combina innovación
								y profesionalismo con más de 10 años de experiencia en el sector
								inmobiliario.
							</p>
							<p className='banner-info__text__text'>
								Nos especializamos en la comercialización de proyectos exclusivos
								y en la administración de propiedades con fines de renta vacacional.
								Como miembros de la Asociación Mexicana de Profesionales Inmobiliarios
								(AMPI), seguimos las mejores prácticas del sector y nos mantenemos
								actualizados con las últimas tendencias y regulaciones, asegurando la
								confianza y seguridad en las inversiones de nuestros clientes.
							</p>
							<div className='banner-info__icono flex items-center justify-center lg:justify-start mt-6 mb-12'>
								<Image src={LogoAmpi} alt="Logo AMPI" className='banner-info__icono__image' />
								<p className='banner-info__icono__text'>
									Miembros de la Asociación Mexicana de Profesionales Inmobiliarios (AMPI)
								</p>
							</div>
							<Button text='Contáctanos' type='secondary' position='left' />
						</div>
					</animated.div>
					<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
						<div className='banner-info__images lg:basis-1/2 basis-full relative z-10 flex lg:justify-end justify-center pt-10 lg:pt-0'>
							<Image src={ImageBanner1} alt="Nos especializamos en la comercialización de proyectos exclusivos y en la administración de propiedades con fines de renta vacacional." className='banner-info__images__item' />
							<div className='banner-info__images__item--custom'></div>
						</div>
					</animated.div>
				</div>
				<Image src={BannerEffect1} alt="Quiénes Somos" className='h-full absolute top-0 right-0 -z-1 lg:block hidden' style={{ zIndex: '-1' }} />
			</div>

			<BannerToCall bgImage={true} image={BannerCall1} title={'Nuestro compromiso con la calidad y la satisfacción del cliente es el núcleo de todo lo que hacemos.'} />

			<div className='banner-data py-20'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__subtitle mb-6'>
							Nos enorgullece contribuir al crecimiento del sector inmobiliario
							en Mazatlán, ofreciendo propiedades que cumplen con los más altos
							estándares de confort. En Strata, construimos relaciones duraderas
							basadas en la confianza y el éxito compartido, creciendo junto con
							nuestros clientes y la comunidad.
						</p>
						<p className='banner-info__text__title mt-10 mb-12'>Propiedades</p>
					</div>
					<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
						<div className='bg-white w-full p-6 flex gap-2 flex-wrap justify-between'>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property1.src}
									type={'Departamento'}
									price={2800000}
									title={'Encanto Roca del Mar'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									rooms={'1, 3'}
									bathrooms={'1, 2'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property2.src}
									type={'Renta'}
									price={2800000}
									title={'Encanto Roca del Mar'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									rooms={'1, 3'}
									bathrooms={'1, 2'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property3.src}
									type={'Desarrollo'}
									price={2800000}
									title={'Encanto Roca del Mar'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									rooms={'1, 3'}
									bathrooms={'1, 2'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property4.src}
									type={'Conjunto de casas'}
									price={2800000}
									title={'Encanto Roca del Mar'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									rooms={'1, 3'}
									bathrooms={'1, 2'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property5.src}
									type={'Preventa'}
									price={2800000}
									title={'Encanto Roca del Mar'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									rooms={'1, 3'}
									bathrooms={'1, 2'}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property6.src}
									type={'Proyecto'}
									price={2800000}
									title={'Encanto Roca del Mar'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									rooms={'1, 3'}
									bathrooms={'1, 2'}
								/>
							</div>
						</div>
					</animated.div>
					<div className='pt-20'>
						<Button text='Contáctanos' type='secondary' position='center' />
					</div>
				</div>
			</div>

			<div className='banner-gray lg:py-20 py-10'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mt-10 mb-12'>Socios</p>
					</div>
					<div className='sm:flex block justify-center lg:gap-40 sm:gap-10'>
						<Image src={LogoSocio1} alt="Logo Taller del Ladrillo" className='banner-gray__logo' />
						<Image src={LogoSocio2} alt="Logo El Encanto Desarrollos" className='banner-gray__logo' />
						<Image src={LogoSocio3} alt="Logo Hersa Corporativo" className='banner-gray__logo' />
					</div>
				</div>
			</div>

			<div className='bg-white py-10'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title lg:mt-10 lg:mb-12'>Propiedades</p>
					</div>
				</div>
			</div>

			<div className="banner-map">
				<div className=''>
					<MapComponent dataPin={DataList[0].location || []} />
				</div>
			</div>

			<div className='banner-gray py-20'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mb-12'>
							Zona de desarrollos
						</p>
						<p className='banner-info__text__subtitle mb-6'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Sed eleifend mi in ante tempor placerat. Integer ut mi
							eget risus congue pharetra a eget nisi.
						</p>
					</div>
					<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element">
						<div className='w-full p-6 flex gap-2 flex-wrap justify-between'>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property7.src}
									zone={'Centro'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									toLinkZone={true}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property8.src}
									zone={'Puerto'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									toLinkZone={true}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property9.src}
									zone={'Norte'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									toLinkZone={true}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property10.src}
									zone={'Sur'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									toLinkZone={true}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property11.src}
									zone={'Zona Comercial'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									toLinkZone={true}
								/>
							</div>
							<div className='banner-data__item mb-6'>
								<PropertyItem
									image={Property12.src}
									zone={'Alrededores'}
									info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
									toLinkZone={true}
								/>
							</div>
						</div>
					</animated.div>
				</div>
			</div>

			<div className='bg-white py-10'>
				<div className='container'>
					<div className='banner__text text-center mx-auto'>
						<p className='banner-info__text__title mt-10 mb-12'>
							Vea lo que dicen nuestros clientes
						</p>
					</div>
					<div className='banner__text banner__text--large text-center mx-auto'>
						<p className='banner-info__text__subtitle mb-6'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam id fermentum arcu. Nulla facilisi. Nulla in viverra
							risus, in iaculis lectus. Nulla ut nibh ut sapien dapibus auctor.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
