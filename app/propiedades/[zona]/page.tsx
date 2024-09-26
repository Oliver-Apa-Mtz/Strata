"use client";
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProperties } from '../../../store/propertiesSlice';
import { useSpring, animated } from '@react-spring/web';
import { useParams } from 'next/navigation';

import { DataList, formatPrice, DataZones } from '../../../utils/data';
import '../../../styles/home.css';
const PropertyItem = dynamic(() => import('../../../components/PropertyItem'), {
	ssr: true,
});
const SkeletonPropertyItem = dynamic(() => import('../../../components/SkeletonPropertyItem'), {
	ssr: true,
});

const Propiedades = () => {
	const dispatch = useDispatch();
	const [isMobile, setIsMobile] = useState(false);
	const [loading, setLoading] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	const [propiedades, setPropiedades] = useState([] as any);
	const [filteredProperties, setFilteredProperties] = useState<any[]>(propiedades);
	const [selectedZone, setSelectedZone] = useState<string | null>(null);
	const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

	const params = useParams();

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});

	const getData = async () => {
		setLoading(true);
		try {
			const response: any = await new Promise((resolve) => {
				setTimeout(() => {
					resolve({
						properties: DataList,
					});
				}, 1000);
			})
			return response.properties;
			/*const response = await axios.get('https://api.com/propiedades');
			return response.data.properties;*/
		} catch (error) {
			console.error("Error al consultar los datos", error);
			return [];
		} finally {
			setLoading(false);
		}
	};

	const checkPriceRange = (price: number, range: string) => {
		const [min, max] = range.split('-').map(Number);
		return price >= min && price <= max;
	};

	const handleZoneFilter = (zone: string) => {
		setSelectedZone(zone);
	};

	const handlePriceFilter = (range: string) => {
		setSelectedPriceRange(range);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1023);
		};
		handleResize();

		const fetchData = async () => {
			const properties = await getData();
			setPropiedades(properties);
			dispatch(setProperties(properties));
		};
		fetchData();
		const { zona } = params;
		if (zona.length > 0 && zona !== 'all') {
			const zonaParse = zona !== 'Comercial' ? zona : 'Zona Comercial'
			setSelectedZone(String(zonaParse));
			setIsVisible(true);
		}
	}, []);

	useEffect(() => {
		if (!selectedZone && !selectedPriceRange) {
			setFilteredProperties(propiedades);
		} else {
			setFilteredProperties(
				propiedades.filter((property: any) => {
					const isZoneMatch = selectedZone ? property.zone === selectedZone : true;
					const isPriceMatch = selectedPriceRange ? checkPriceRange(property.price, selectedPriceRange) : true;
					return isZoneMatch && isPriceMatch;
				})
			);
		}
	}, [selectedZone, selectedPriceRange, propiedades]);

	useEffect(() => {
		if (filteredProperties.length > 0) {
			setIsVisible(true);
		}
	}, [filteredProperties])


	return (
		<div className='lg:pt-[100px] pt-[80px]'>
			<div className='banner-listado pb-32 pt-5'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mt-10 lg:mb-12 mb-4'>Propiedades</p>
					</div>
					<div>
						{propiedades.length > 0 && (
							<div className='flex px-8 py-4 justify-between items-center lg:flex-nowrap flex-wrap'>
								<div className='lg:basis-1/2 basis-full uppercase banner-listado__total'>
									<p>
										Mostrando 1-{propiedades.length} de 100 propiedades
										{selectedZone ? ' / ' + selectedZone : ''}
										{selectedPriceRange ? ` / ${selectedPriceRange.split('-').map(price => formatPrice(Number(price))).join(' - ')}` : ''}
									</p>
								</div>
								<div className='lg:basis-1/2 basis-full flex lg:justify-end justify-center sm:flex-nowrap flex-wrap'>
									<div className='banner-listado__select uppercase relative'>
										<p>Filtrar por zona</p>
										<div className='banner-listado__arrow'></div>
										<div className='banner-listado__list'>
											{DataZones.map((zone, index) => (
												<div
													key={index}
													className='banner-listado__list__item'
													onClick={() => handleZoneFilter(zone)}>
													{zone}
												</div>
											))}
											<div
												className='banner-listado__list__item'
												onClick={() => handleZoneFilter('')}>
												Ver todo
											</div>
										</div>
									</div>
									<div className='banner-listado__select uppercase relative'>
										<p>Filtrar por precio</p>
										<div className='banner-listado__arrow'></div>
										<div className='banner-listado__list'>
											<div className='banner-listado__list__item' onClick={() => handlePriceFilter('1000000-2000000')}>1,000,000 - 2,000,000</div>
											<div className='banner-listado__list__item' onClick={() => handlePriceFilter('2000000-3000000')}>2,000,000 - 3,000,000</div>
											<div className='banner-listado__list__item' onClick={() => handlePriceFilter('3000000-4000000')}>3,000,000 - 4,000,000</div>
											<div className='banner-listado__list__item' onClick={() => handlePriceFilter('')}>Ver todo</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					{loading && propiedades.length === 0 && (
						<div className='bg-white w-full p-6 flex gap-2 flex-wrap justify-between'>
							<div className='banner-data__item mb-6'>
								<SkeletonPropertyItem />
							</div>
							<div className='banner-data__item mb-6'>
								<SkeletonPropertyItem />
							</div>
							<div className='banner-data__item mb-6'>
								<SkeletonPropertyItem />
							</div>
						</div>
					)}

					{!loading && (
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<div className='bg-white w-full p-6 flex lg:gap-4 gap-2 flex-wrap justify-start'>
								{filteredProperties.length > 0 ? (
									filteredProperties.map((propiedad: any, index: number) => (
										<div className='banner-data__item mb-6'>
											<PropertyItem
												image={propiedad.image}
												type={propiedad.type}
												price={propiedad.price}
												title={propiedad.title}
												info={propiedad.info}
												rooms={propiedad.rooms}
												bathrooms={propiedad.bathrooms}
												key={'propiedad' + index}
												id={propiedad.id}
											/>
										</div>
									))
								) : (
									<div className='text-center w-full'>
										<p className='banner-info__text__subtitle p-8'>No se encontraron propiedades</p>
									</div>
								)}
							</div>
						</animated.div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Propiedades