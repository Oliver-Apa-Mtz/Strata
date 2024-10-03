"use client";
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { RootState } from '../../../store/store';
import '../../../styles/home.css';
import '../../../styles/property.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { formatPrice } from '../../../utils/data';

const PropertyItem = dynamic(() => import('../../../components/PropertyItem'), {
	ssr: true,
});
const Form = dynamic(() => import('../../../components/Form'), {
	ssr: false,
});
const MapComponent = dynamic(() => import('../../../components/Map'), {
	ssr: false,
});

import Fogata from '../../../assets/img/mockPropiedad/icon-fogata.svg';
import Gym from '../../../assets/img/mockPropiedad/icon-gym.svg';
import Caminar from '../../../assets/img/mockPropiedad/icon-walk.svg';
import Bike from '../../../assets/img/mockPropiedad/icon-bike.svg';
import Mesa from '../../../assets/img/mockPropiedad/icon-mesa.svg';
import Jardin from '../../../assets/img/mockPropiedad/icon-jardin.svg';
import Alberca from '../../../assets/img/mockPropiedad/icon-alberca.svg';
import Jacuzi from '../../../assets/img/mockPropiedad/icon-jacuzi.svg';
import Bosque from '../../../assets/img/mockPropiedad/icon-bosque.svg';

import Property1 from '../../../assets/img/property-13.webp';
import Property2 from '../../../assets/img/property-14.webp';
import Property3 from '../../../assets/img/property-15.webp';

import Arrow from '../../../assets/img/arrow.svg'

const Propiedad = () => {
	const { properties } = useSelector((state: RootState) => state.properties);
	const [propiedad, setPropiedad] = useState({} as any)
	const params = useParams();
	const router = useRouter();
	const { id } = params;

	const featureImages: Record<string, any> = {
		Fogata: Fogata,
		Gym: Gym,
		Caminar: Caminar,
		Bicicleta: Bike,
		Mesa: Mesa,
		Jardin: Jardin,
		Alberca: Alberca,
		Jacuzi: Jacuzi,
		Bosque: Bosque,
	};

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
			<div id="datail" className="banner-detail w-screen" style={{ backgroundImage: `url(${propiedad.banner})` }}>
				<div className="container h-full flex items-center gap-4">
					<div className="banner-detail__text w-full mx-auto text-center">
						<img src={propiedad.logo} alt="" className='sm:w-[540px] w-[250px] mx-auto' />
						<h1 className="mb-10 title-ppal mt-8">
							{propiedad.subtitle}
						</h1>
					</div>
				</div>
			</div>

			<div className='banner-datail-info relative'>
				<div className='flex justify-center items-center lg:flex-nowrap flex-wrap'>
					<div className='lg:w-[40%] w-full'>
						<div className='flex justify-end lg:pr-20'>
							<div className='sm:w-[330px] w-full sm:px-0 px-4 lg:mx-0 mx-auto lg:my-0 my-14'>
								<img src={propiedad.logoColor} alt="" className='sm:w-[310px] w-[250px]' />
								<p className='banner-info__text__custom my-6'>
									{propiedad.textInfo}
								</p>
								<p className='banner-info__text__text'>
									{propiedad.text}
								</p>
							</div>
						</div>
					</div>
					<div className='lg:w-[40%] w-full'>
						<img src={propiedad.imageMain} alt="" className='w-full' />
					</div>
					<div className='lg:w-[20%] w-full flex flex-wrap'>
						{propiedad.pictures && propiedad.pictures.length > 0 && (
							<>
								<img src={propiedad.pictures[0]} alt="" className='lg:w-auto sm:w-[33%] w-full' />
								<img src={propiedad.pictures[1]} alt="" className='lg:w-auto sm:w-[33%] w-full' />
								<img src={propiedad.pictures[2]} alt="" className='lg:w-auto sm:w-[33%] w-full' />
							</>
						)}
					</div>
				</div>
			</div>

			<div className='banner-listado pb-32 pt-5'>
				<div className='container'>
					<div>
						<p className='banner-info__text__title mt-10 lg:mb-12 mb-4'>Modelos</p>
					</div>

					{propiedad.models && propiedad.models.length > 0 && (
						<div className='flex mb-8 mt-4 md:flex-nowrap flex-wrap'>
							{propiedad?.models?.map((item: any, id: number) => (
								<div className={`${propiedad.modelSelect === item ? 'banner-detail__model__item--active' : ''} banner-detail__model__item banner-detail__model__item--line py-2 px-6`} key={'model' + id}>
									<p className='banner-info__text__text'>{item}</p>
								</div>
							))}
							<div className='banner-detail__model__item py-2 px-4 flex items-center'>
								<p className='banner-info__text__text'>Ver más</p>
								<span>
									<Image src={Arrow} alt="Arrow icon" className='ml-4 invert' />
								</span>
							</div>
						</div>
					)}

					<div className='flex justify-between items-start gap-10 lg:px-8 px-2 lg:flex-nowrap flex-wrap'>
						<div className='lg:w-[75%] w-full'>

							<div className='flex justify-between items-center sm:flex-nowrap flex-wrap'>
								<p className='banner-info__text__title mb-4 sm:w-[40%] w-full sm:text-left text-center'>{propiedad.modelSelect}</p>
								<p className='banner-detail__price mb-4 sm:w-[60%] w-full sm:text-right text-center'>Desde {formatPrice(propiedad.price || '')}</p>
							</div>

							<div className='flex sm:justify-between justify-center gap-2 sm:flex-nowrap flex-wrap'>
								{propiedad.pictures && propiedad.pictures.length > 0 && propiedad.pictures.map((item: any, id: number) => (
									<div className='sm:w-[24%] w-[45%]' key={'picture' + id}>
										<img src={item} alt="" />
									</div>
								))}
							</div>

							<div className='banner-info__text__text my-8'>
								{propiedad?.description}
							</div>

							<div className='flex justify-between sm:flex-nowrap flex-wrap'>
								<div className='sm:w-[60%] w-full'>
									<img src={propiedad.croquis} alt="" />
								</div>
								<div className='sm:w-[40%] w-full sm:pl-10 pl-0'>
									<div className='w-full max-w-[240px] sm:mx-0 mx-auto sm:mt-0 mt-8'>
										<p className='banner-detail__price mb-2'>Medidas</p>
										<div className='banner-info__text__text banner-info__text__text--border p-1 flex justify-between'>
											<p>Interior: </p>
											<p>{propiedad?.sizes?.interior}</p>
										</div>
										<div className='banner-info__text__text banner-info__text__text--border p-1 flex justify-between'>
											<p>Exterior: </p>
											<p>{propiedad?.sizes?.terraza}</p>
										</div>
										<div className='banner-info__text__text p-1 flex justify-between'>
											<p>Construcción: </p>
											<p>{propiedad?.sizes?.total}</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='lg:w-[25%] w-full flex justify-end'>
							<div className=' w-full max-w-[280px] lg:mx-0 mx-auto lg:mt-0 mt-8'>
								<div className='w-full mb-6'>
									<PropertyItem
										image={propiedad?.agente?.image}
										title={propiedad?.agente?.name}
										small={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container'>
					<p className='banner-detail__price mb-2 mt-20'>Características</p>
					{propiedad?.features && propiedad?.features.length > 0 && (
						<div className='flex flex-wrap'>
							{propiedad?.features?.map((item: any, id: number) => (
								<div className='flex items-center mb-4 gap-4 lg:w-[25%] md:w-[33%] w-[50%]' key={'feature' + id}>
									<div className='w-[30px]'>
										<Image src={featureImages[item]} alt={item} className='h-auto max-h-[30px] w-auto max-w-[30px]' />
									</div>
									<p className='banner-info__text__text'>{item}</p>
								</div>
							))}
						</div>
					)}
				</div>

				<div className='container'>
					<p className='banner-detail__price mb-2'>Amenidades</p>
					{propiedad?.amenidades && propiedad?.amenidades.length > 0 && (
						<div className='flex flex-wrap'>
							{propiedad?.amenidades?.map((item: any, id: number) => (
								<div className='flex items-center mb-4 gap-4 lg:w-[25%] md:w-[33%] w-[50%]' key={'feature' + id}>
									<div className='w-[30px]'>
										<Image src={featureImages[item]} alt={item} className='h-auto max-h-[30px] w-auto max-w-[30px]' />
									</div>
									<p className='banner-info__text__text'>{item}</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			<div className='banner-gray lg:py-20 py-10'>
				<div className='container'>
					<div className=''>
						<p className='banner-info__text__title mt-10 mb-12'>Galería</p>
					</div>
					<div className='flex justify-between sm:gap-5 gap-2 sm:mb-6 mb-2'>
						{propiedad.picturesExtra && propiedad.picturesExtra.length > 0 && (
							<>
								<div className='w-[33%]'>
									<img src={propiedad.picturesExtra[0]} alt="" />
								</div>
								<div className='w-[33%]'>
									<img src={propiedad.picturesExtra[1]} alt="" />
								</div>
								<div className='w-[33%]'>
									<img src={propiedad.picturesExtra[2]} alt="" />
								</div>
							</>
						)}
					</div>
					<div className='flex justify-between sm:gap-4 gap-2 sm:mb-6 mb-2'>
						{propiedad.imageMainExtra && propiedad.imageMainExtra.length > 0 && (
							<>
								<div className='w-[49%]'>
									<img src={propiedad.imageMainExtra[0]} alt="" />
								</div>
								<div className='w-[49%]'>
									<img src={propiedad.imageMainExtra[1]} alt="" />
								</div>
							</>
						)}
					</div>
					<div className='flex'>
						<div className='w-[100%]'>
							<img src={propiedad.video} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white sm:py-20 py-10'>
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

			<div className="banner-map sm:mb-0 -mb-20">
				<div className=''>
					<MapComponent dataPin={propiedad.location} />
				</div>
			</div>

			<Form />
		</div>
	)
}

export default Propiedad