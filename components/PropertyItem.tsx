import '../styles/property.css';
import Image from 'next/image';

import IconStart from '../assets/img/star.svg';

interface IProp {
	image: any;
	type: string;
	price: string;
	title: string;
	info: string;
	rooms: string;
	bathrooms: string;
}

const PropertyItem = ({ image, type, price, title, info, rooms, bathrooms }: IProp) => {
	return (
		<div className='property w-full'>
			<div className='property__image relative' style={{ backgroundImage: `url(${image.src})` }}>
				<div className='property__type absolute text-center'>
					<p>{type}</p>
				</div>
				<div className='property__price absolute text-center pt-1'>
					<p>Desde {price}</p>
				</div>
			</div>
			<div className='pt-6'>
				<div className='text-center'>
					<p className='property__title'>{title}</p>
					<p className='property__info pt-2 pb-5'>{info}</p>
				</div>
				<div className='flex text-center'>
					<div className='basis-1/2 flex items-center justify-center property--line'>
						<Image src={IconStart} alt="" className='banner-info__icono__image' />
						<p className='property__info'>{rooms} Recamaras</p>
					</div>
					<div className='basis-1/2 flex items-center justify-center'>
						<Image src={IconStart} alt="" className='banner-info__icono__image' />
						<p className='property__info'>{bathrooms} Baños</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyItem