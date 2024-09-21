"use client";
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { RootState } from '../../../store/store';
import '../../../styles/home.css';
import '../../../styles/property.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PropertyItem = dynamic(() => import('../../../components/PropertyItem'), {
	ssr: true,
});
const Form = dynamic(() => import('../../../components/Form'), {
	ssr: false,
});

import Logo from '../../../assets/img/mockPropiedad/logo-white.webp';
import LogoColor from '../../../assets/img/mockPropiedad/logo-color.webp';
import Banner from '../../../assets/img/mockPropiedad/banner.webp';
import Photo1 from '../../../assets/img/mockPropiedad/photo-1.webp';
import Photo2 from '../../../assets/img/mockPropiedad/photo-2.webp';
import Photo3 from '../../../assets/img/mockPropiedad/photo-3.webp';
import Photo4 from '../../../assets/img/mockPropiedad/photo-4.webp';

import Property1 from '../../../assets/img/property-13.webp';
import Property2 from '../../../assets/img/property-14.webp';
import Property3 from '../../../assets/img/property-15.webp';
import Room from '../../../assets/img/mockPropiedad/room.webp';
import Equipo3 from '../../../assets/img/equipo-3.webp';

import Mapa from '../../../assets/img/map.webp';

const Propiedad = () => {
	const { properties } = useSelector((state: RootState) => state.properties);
	const [propiedad, setPropiedad] = useState({} as any)
	const params = useParams();
	const router = useRouter();
	const { id } = params;

	useEffect(() => {
		if (Number(id)) {
			const propiedad = properties.find((propiedad) => propiedad.id === Number(id));
			if (propiedad) {
				setPropiedad(propiedad);
			} else {
				router.push(`/`);
			}
		}
	}, [id])
	return (
		<div className='lg:pt-[100px] pt-[80px] pb-20'>
			<div id="datail" className="banner-detail w-screen" style={{ backgroundImage: `url(${Banner.src})` }}>
				<div className="container h-full flex items-center gap-4">
					<div className="banner-detail__text w-full mx-auto text-center">
						<Image src={Logo} alt="" className='w-[540px] mx-auto' />
						<h1 className="mb-10 title-ppal mt-8">
							{propiedad.subtitle}
						</h1>
					</div>
				</div>
			</div>

			<div className='banner-datail-info relative'>
				<div className='flex justify-center items-center'>
					<div className='w-[40%]'>
						<div className='flex justify-end pr-20'>
							<div className='w-[330px]'>
								<Image src={LogoColor} alt="" className='w-[310px]' />
								<p className='banner-info__text__custom my-6'>
									Oasis Ananta es un exclusivo desarrollo frente a la playa en Mazatlán,
									Sinaloa, que fusiona la serenidad del desierto con la frescura del océano.
								</p>
								<p className='banner-info__text__text'>
									Este proyecto ofrece un santuario único donde la elegancia se conecta
									con la naturaleza, proporcionando una experiencia de vida inigualable
									con todas las comodidades modernas y un diseño arquitectónico que se
									integra armoniosamente con el entorno natural.
								</p>
							</div>
						</div>
					</div>
					<div className='w-[40%]'>
						<Image src={Photo1} alt="" className='w-full' />
					</div>
					<div className='w-[20%] flex flex-wrap'>
						<Image src={Photo2} alt="" className='' />
						<Image src={Photo3} alt="" className='' />
						<Image src={Photo4} alt="" className='' />
					</div>
				</div>
			</div>

			<div className='banner-listado pb-32 pt-5'>
				<div className='container'>
					<div className=''>
						<p className='banner-info__text__title mt-10 lg:mb-12 mb-4'>Modelos</p>
					</div>

					<div className='flex px-8'>
						<div className='flex justify-between w-[73%]'>
							<p className='banner-info__text__title mb-4'>Agua</p>
							<p className='banner-info__text__title mb-4'>Desde $ 3,502,365.00</p>
						</div>
					</div>

					<div className='flex justify-between gap-10 px-8'>
						<div className='w-[75%]'>
							<div className='flex justify-between gap-2'>
								<div className='w-[24%]'>
									<Image src={Photo2} alt="" className='' />
								</div>
								<div className='w-[24%]'>
									<Image src={Photo2} alt="" className='' />
								</div>
								<div className='w-[24%]'>
									<Image src={Photo2} alt="" className='' />
								</div>
								<div className='w-[24%]'>
									<Image src={Photo2} alt="" className='' />
								</div>
							</div>
						</div>
						<div className='w-[25%] flex justify-end'>
							<div className=' w-full max-w-[280px]'>
								<div className='w-full mb-6'>
									<PropertyItem
										image={Equipo3.src}
										title={'Lorem ipsum dolor sit amet'}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='flex px-8'>
						<div className='flex justify-between w-[73%]'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nunc ornare ligula ante, molestie congue erat interdum nec.
								Cras efficitur eget velit eget vulputate. Mauris luctus
								purus vitae faucibus aliquet
							</p>
						</div>
					</div>

					<div className='flex px-8'>
						<div className='flex justify-between w-[73%]'>
							<Image src={Room} alt="" className='w-[60%]' />
						</div>
					</div>
				</div>
			</div>

			<div className='banner-gray lg:py-20 py-10'>
				<div className='container'>
					<div className=''>
						<p className='banner-info__text__title mt-10 mb-12'>Galería</p>
					</div>
					<div className='flex justify-between gap-5 mb-6'>
						<div className='w-[33%]'>
							<Image src={Photo2} alt="" className='' />
						</div>
						<div className='w-[33%]'>
							<Image src={Photo3} alt="" className='' />
						</div>
						<div className='w-[33%]'>
							<Image src={Photo4} alt="" className='' />
						</div>
					</div>
					<div className='flex justify-between gap-4 mb-6'>
						<div className='w-[49%]'>
							<Image src={Photo1} alt="" className='' />
						</div>
						<div className='w-[49%]'>
							<Image src={Photo1} alt="" className='' />
						</div>
					</div>
					<div className='flex'>
						<div className='w-[100%]'>
							<Image src={Banner} alt="" className='' />
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white py-20'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mb-12'>
							Lugares de interés
						</p>
					</div>
					<div className='w-full p-6 flex lg:gap-2 gap-10 flex-wrap lg:justify-between justify-center'>
						<div className='banner-data__item lg:mb-6'>
							<PropertyItem
								image={Property1.src}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item lg:mb-6'>
							<PropertyItem
								image={Property2.src}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item lg:mb-6'>
							<PropertyItem
								image={Property3.src}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="banner-map">
				<Image src={Mapa} alt="Ubica nuestras propiedades" className='' />
			</div>

			<Form />
		</div>
	)
}

export default Propiedad