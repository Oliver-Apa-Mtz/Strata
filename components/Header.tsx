"use client";
import '../styles/header.css';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/logo.png';

const Header = () => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header w-screen flex justify-center bg-white z-50 ${isHeaderFixed ? 'fixed shadow-sm' : 'absolute'}`}>
			<div className={`flex justify-between items-center container py-[20px]`}>
				<div className="lg:basis-4/6">
					<div className="header__nav h-full flex items-center md:gap-3 xl:gap-8 text-sm">
						<Link
							href="home"
							className="header__nav__item cursor-pointer flex items-center">
							Nosotros
						</Link>
						<Link
							href="home"
							className="header__nav__item cursor-pointer flex items-center">
							Propiedades
						</Link>
						<Link
							href="home"
							className="header__nav__item cursor-pointer flex items-center">
							Socios
						</Link>
						<Link
							href="home"
							className="header__nav__item cursor-pointer flex items-center">
							Contacto
						</Link>
					</div>
				</div>
				<div className="lg:basis-2/6">
					<Link href="/" className="header__logo cursor-pointer h-[60px]">
						<Image src={Logo} alt="Moyado" className='w-[138px] mx-auto' />
					</Link>
				</div>
				<div className="lg:basis-4/6">

				</div>
			</div>
			{isMenuOpen && (
				<div className="header__nav__movil">
					<Link
						href="home"
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						Home
					</Link>
					<Link
						href="about"
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						¿Quiénes somos?
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header