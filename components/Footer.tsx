"use client";
import '../styles/footer.css';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/logo-footer.webp';
import IconoPhone from '../assets/img/icono-phone-footer.webp';

const Footer = () => {
	return (
		<footer className='footer w-screen'>
			<div className='container'>
				<div className="text-center">
					<p className='footer__title mb-4'>CONTÁCTANOS</p>
				</div>
			</div>

			<div className={`flex justify-between items-center container`}>
				<div className="lg:basis-1/3">
					<div className="footer__item flex items-center">
						<div className="flex footer__item__container">
							<Image src={IconoPhone} alt="Moyado" className='w-[70px] mr-5' />
							<div>
								<p className='footer__item__text'>Telefono</p>
								<a href="" className='footer__item__link'>669 138 8434</a>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:basis-1/3">
					<div className="footer__item footer__item--custom flex items-center justify-center">
						<div className="flex items-center footer__item__container">
							<Image src={IconoPhone} alt="Moyado" className='w-[70px] mr-5' />
							<div>
								<p className='footer__item__text'>Localización</p>
								<a href="" className='footer__item__link'>Avenida Doctor Carlos Canseco. 6000-6 82133. Mazatlán, Sinaloa.</a>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:basis-1/3">
					<div className="footer__item flex items-center justify-end">
						<div className="flex footer__item__container">
							<Image src={IconoPhone} alt="Moyado" className='w-[70px] mr-5' />
							<div>
								<p className='footer__item__text'>Servicio al cliente</p>
								<a href="" className='footer__item__link'>contacto@propertybystrata.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className="footer__nav w-full flex items-center md:gap-3 xl:gap-8 mx-auto">
					<Link
						href="home"
						className="footer__nav__item cursor-pointer flex items-center">
						Nosotros
					</Link>
					<Link
						href="home"
						className="footer__nav__item cursor-pointer flex items-center">
						Propiedades
					</Link>
					<Link
						href="home"
						className="footer__nav__item cursor-pointer flex items-center">
						Socios
					</Link>
					<Link
						href="home"
						className="footer__nav__item cursor-pointer flex items-center">
						Contacto
					</Link>
				</div>
				<div className="footer__social w-full flex items-center justify-between mx-auto mb-20">
					<div className="footer__social__item"></div>
					<div className="footer__social__item"></div>
					<div className="footer__social__item"></div>
					<div className="footer__social__item"></div>
				</div>
				<div className="text-center">
					<Link href="/" className="header__logo cursor-pointer">
						<Image src={Logo} alt="Moyado" className='w-[70px] mx-auto' />
					</Link>
					<p className="footer__privacy mt-4">Property by strata © Copyrights 2024</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer