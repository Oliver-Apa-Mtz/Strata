"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

import '../../styles/home.css';
import '../../styles/footer.css';
const Form = dynamic(() => import('../../components/Form'), {
	ssr: false,
});

import IconoPhone from '../../assets/img/icono-phone-footer.webp';
import IconoPin from '../../assets/img/icono-pin-footer.webp';
import IconoCall from '../../assets/img/icono-call-footer.webp';

const Contacto = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();
		setIsVisible(true);
	}, []);
	return (
		<div className="lg:pt-[100px] pt-[80px]">
			<div className='banner-blue py-20'>
				<div className='container'>
					<div className='banner-blue__container mx-auto text-center'>
						<p className='banner-blue__title mb-4'>Datos de Contacto</p>
					</div>
				</div>
			</div>

			<div className='banner-info--map relative'>
				<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
					<div className='container flex justify-between items-center flex-wrap'>
						<div className='banner-info__text--large lg:basis-1/2 basis-full lg:mx-0 mx-auto'>
							<p className='banner-info__text__title lg:text-left text-center lg:mb-0 mb-10'>Cómo encontrarnos</p>
							<div className='banner-info__text'>
								<div className="flex footer__item__container--large lg:w-[90%] w-full lg:flex-nowrap flex-wrap">
									<Image src={IconoPhone} alt="Contáctanos" className='w-[70px] h-max lg:mr-5 mx-auto' />
									<div className='w-full'>
										<p className='footer__item__text'>Contáctanos</p>
										<a href="" className='footer__item__link block'>Teléfono: 669 138 8434</a>
										<a href="" className='footer__item__link block'>Whatsapp: 669 138 8434</a>
									</div>
								</div>
								<div className="flex items-center footer__item__container--large footer__item__container--line lg:w-[90%] w-full lg:flex-nowrap flex-wrap">
									<Image src={IconoPin} alt="Localización" className='w-[70px] h-max lg:mr-5 mx-auto' />
									<div className='w-full'>
										<p className='footer__item__text'>Localización</p>
										<a href="" className='footer__item__link'>Avenida Doctor Carlos Canseco. 6000-6 82133. Mazatlán, Sinaloa.</a>
									</div>
								</div>
								<div className="flex footer__item__container--large lg:w-[90%] w-full lg:flex-nowrap flex-wrap">
									<Image src={IconoCall} alt="Servicio al cliente" className='w-[70px] h-max lg:mr-5 mx-auto' />
									<div className='w-full'>
										<p className='footer__item__text'>Servicio al cliente</p>
										<a href="" className='footer__item__link'>contacto@propertybystrata.com</a>
									</div>
								</div>
							</div>
						</div>
						<div className='banner-info__images lg:basis-1/2 basis-full lg:mt-0 mt-10'>
							<div className='lg:mx-0 mx-auto'>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1427.8592217337173!2d-106.4449213644111!3d23.2686053070682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c7f63971a93093%3A0x71b4ba53d1d022e3!2sProperty%20by%20Strata!5e0!3m2!1ses-419!2smx!4v1727315162168!5m2!1ses-419!2smx" width="100%" height="500" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
					</div>
					<Form />
				</animated.div>
			</div>
		</div>
	)
}

export default Contacto