"use client";
import '../styles/footer.css';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/logo-footer.webp';
import IconoPhone from '../assets/img/icono-phone-footer.webp';
import IconoPin from '../assets/img/icono-pin-footer.webp';
import IconoCall from '../assets/img/icono-call-footer.webp';
import IconoFacebook from '../assets/img/icono-facebook.webp';
import IconoInstagram from '../assets/img/icono-instagram.webp';
import IconoTwitter from '../assets/img/icono-twitter.webp';
import IconoWhats from '../assets/img/icono-whatsapp.webp';

const Footer = () => {
	return (
		<footer className='footer w-screen'>
			<div className='container'>
				<div className="text-center">
					<p className='footer__title mb-4'>CONTÁCTANOS</p>
				</div>
			</div>

			<div className={`flex justify-between items-center container lg:flex-nowrap flex-wrap`}>
				<div className="lg:basis-1/3 basis-full">
					<div className="footer__item flex items-center">
						<div className="flex footer__item__container lg:items-start items-center w-full">
							<Image src={IconoPhone} alt="Teléfono" className='w-[70px] mr-5 h-max' />
							<div>
								<p className='footer__item__text'>Teléfono</p>
								<a href="" className='footer__item__link'>669 138 8434</a>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:basis-1/3 basis-full">
					<div className="footer__item footer__item--custom flex items-center justify-center">
						<div className="flex items-center footer__item__container w-full">
							<Image src={IconoPin} alt="Localización" className='w-[70px] mr-5 h-max' />
							<div>
								<p className='footer__item__text'>Localización</p>
								<a href="" className='footer__item__link'>Avenida Doctor Carlos Canseco. 6000-6 82133. Mazatlán, Sinaloa.</a>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:basis-1/3 basis-full">
					<div className="footer__item flex items-center lg:justify-end">
						<div className="flex footer__item__container lg:items-start items-center w-full">
							<Image src={IconoCall} alt="Servicio al cliente" className='w-[70px] mr-5 h-max' />
							<div>
								<p className='footer__item__text'>Servicio al cliente</p>
								<a href="" className='footer__item__link'>contacto@propertybystrata.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className="footer__nav w-full sm:flex items-center justify-center gap-3 xl:gap-8 mx-auto">
					<Link
						href="/nosotros"
						className="footer__nav__item cursor-pointer flex items-center">
						Nosotros
					</Link>
					<Link
						href="/propiedades/all"
						className="footer__nav__item cursor-pointer flex items-center">
						Propiedades
					</Link>
					<Link
						href="/agentes"
						className="footer__nav__item cursor-pointer flex items-center">
						Socios
					</Link>
					<Link
						href="/contacto"
						className="footer__nav__item cursor-pointer flex items-center">
						Contacto
					</Link>
				</div>
				<div className="footer__social w-full flex items-center justify-between mx-auto lg:mb-20 mb-10">
					<div className="footer__social__item flex items-center justify-center">
						<Image src={IconoFacebook} alt="Facebook" className='w-[14px]' />
					</div>
					<div className="footer__social__item flex items-center justify-center">
						<Image src={IconoWhats} alt="WhatsApp" className='w-[20px]' />
					</div>
					<div className="footer__social__item flex items-center justify-center">
						<Image src={IconoTwitter} alt="Twitter" className='w-[20px]' />
					</div>
					<div className="footer__social__item flex items-center justify-center">
						<Image src={IconoInstagram} alt="Instagram" className='w-[20px]' />
					</div>
				</div>
				<div className="text-center">
					<Link href="/" className="header__logo cursor-pointer">
						<Image src={Logo} alt="Strata" className='w-[70px] mx-auto' />
					</Link>
					<p className="footer__privacy mt-4">Property by strata © Copyrights 2024</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer