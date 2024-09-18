"use client";
import '../styles/property.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import IconStart from '../assets/img/star.svg';

interface IProp {
	image: any;
	type?: string;
	price?: string;
	title?: string;
	info?: string;
	rooms?: string;
	bathrooms?: string;
	zone?: string;
}

const PropertyItem = ({ image, type, price, title, info, rooms, bathrooms, zone }: IProp) => {
	const router = useRouter();
	const handleProductClick = (id: number) => {
		router.push(`/propiedad/${id}`);
	};

	return (
		<div className='property w-full' onClick={() => handleProductClick(1)}>
			<div className='property__image relative' style={{ backgroundImage: `url(${image.src})` }}>
				{type && (
					<div className='property__type absolute text-center'>
						<p>{type}</p>
					</div>
				)}
				{price && (
					<div className='property__price absolute text-center pt-1'>
						<p>Desde {price}</p>
					</div>
				)}
			</div>
			<div className='pt-6'>
				<div className='text-center'>
					{title && (
						<p className='property__title'>{title}</p>
					)}
					{info && (
						<p className='property__info pt-2 pb-5'>{info}</p>
					)}
					{zone && (
						<p className='property__title--custom uppercase'>{zone}</p>
					)}
				</div>
				{rooms && bathrooms && (
					<div className='flex text-center'>
						<div className='basis-1/2 flex items-center justify-center property--line'>
							<Image src={IconStart} alt="Icono recamaras" className='banner-info__icono__image' />
							<p className='property__info'>{rooms} Recamaras</p>
						</div>
						<div className='basis-1/2 flex items-center justify-center'>
							<Image src={IconStart} alt="Icono baños" className='banner-info__icono__image' />
							<p className='property__info'>{bathrooms} Baños</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default PropertyItem