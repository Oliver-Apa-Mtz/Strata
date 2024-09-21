"use client";
import '../styles/header.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/logo.png';
import IconoSearch from '../assets/img/icono-search.webp';
import IconoMenu from '../assets/img/icono-menu.webp';

const Header = () => {
	const pathname = usePathname();
	console.log(pathname)
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	const handleResize = () => {
		const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
		if (isLargeScreen) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={`header w-screen flex justify-center bg-white z-50 ${isHeaderFixed ? 'fixed shadow-sm' : 'absolute'}`}>
			<div className={`flex justify-between items-center container py-[20px] relative`}>
				<div className="lg:basis-4/6">
					<div className="header__nav h-full flex items-center md:gap-3 xl:gap-8 text-sm">
						<Link
							href="/nosotros"
							className={`header__nav__item cursor-pointer flex items-center ${pathname === '/nosotros' ? 'active' : ''}`}>
							Nosotros
						</Link>
						<Link
							href="/propiedades"
							className={`header__nav__item cursor-pointer flex items-center ${pathname === '/propiedades' || pathname.includes('propiedad') ? 'active' : ''}`}>
							Propiedades
						</Link>
						<Link
							href="/agentes"
							className={`header__nav__item cursor-pointer flex items-center ${pathname === '/agentes' ? 'active' : ''}`}>
							Socios
						</Link>
						<Link
							href="/contacto"
							className={`header__nav__item cursor-pointer flex items-center ${pathname === '/contacto' ? 'active' : ''}`}>
							Contacto
						</Link>
					</div>
				</div>
				<div className="lg:basis-2/6">
					<Link href="/" className="header__logo cursor-pointer">
						<Image src={Logo} alt="Logo Strata" className='w-[138px] mx-auto' />
					</Link>
				</div>
				<div className="lg:basis-4/6">
					<div className='flex justify-end items-center'>
						<div className='header__search flex'>
							<Image src={IconoSearch} alt="Buscar" className='w-[24px] mr-2 h-max' />
							<input type="text" name="search" placeholder="BUSCAR" />
						</div>
					</div>
				</div>
				<div className='header__menu text-6xl absolute top-[20px] right-[20px]'>
					<Image src={IconoMenu} alt="Menu" className='w-[40px] h-max cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />
				</div>
			</div>
			{isMenuOpen && (
				<div className="header__nav__movil">
					<Link
						href="/"
						className="header__nav__movil__item cursor-pointer w-full p-3 block"
						onClick={() => setIsMenuOpen(false)}>
						Home
					</Link>
					<Link
						href="/nosotros"
						className="header__nav__movil__item cursor-pointer w-full p-3 block"
						onClick={() => setIsMenuOpen(false)}>
						Nosotros
					</Link>
					<Link
						href="/propiedades"
						className="header__nav__movil__item cursor-pointer w-full p-3 block"
						onClick={() => setIsMenuOpen(false)}>
						Propiedades
					</Link>
					<Link
						href="/agentes"
						className="header__nav__movil__item cursor-pointer w-full p-3 block"
						onClick={() => setIsMenuOpen(false)}>
						Socios
					</Link>
					<Link
						href="/contacto"
						className="header__nav__movil__item cursor-pointer w-full p-3 block"
						onClick={() => setIsMenuOpen(false)}>
						Contacto
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header