"use client";
import dynamic from 'next/dynamic';

import '../../styles/home.css';
const PropertyItem = dynamic(() => import('../../components/PropertyItem'), {
	ssr: true,
});

//Propiedades
import Property1 from '../../assets/img/property-1.webp';
import Property2 from '../../assets/img/property-2.webp';
import Property3 from '../../assets/img/property-3.webp';
import Property4 from '../../assets/img/property-4.webp';
import Property5 from '../../assets/img/property-5.webp';
import Property6 from '../../assets/img/property-6.webp';

const Propiedades = () => {
	return (
		<div className='lg:pt-[100px] pt-[80px]'>
			<div className='banner-listado pb-32 pt-5'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mt-10 lg:mb-12 mb-4'>Propiedades</p>
					</div>
					<div>
						<div className='flex px-8 py-4 justify-between items-center lg:flex-nowrap flex-wrap'>
							<div className='lg:basis-1/2 basis-full uppercase banner-listado__total'>
								<p>Mostrando 1-21 de 100 propiedades</p>
							</div>
							<div className='lg:basis-1/2 basis-full flex lg:justify-end justify-center sm:flex-nowrap flex-wrap'>
								<div className='banner-listado__select uppercase relative'>
									<p>Filtrar por zona</p>
									<div className='banner-listado__arrow'></div>
									<div className='banner-listado__list'>
										<div className='banner-listado__list__item'>Centro</div>
										<div className='banner-listado__list__item'>Norte</div>
										<div className='banner-listado__list__item'>Sur</div>
									</div>
								</div>
								<div className='banner-listado__select uppercase relative'>
									<p>Filtrar por precio</p>
									<div className='banner-listado__arrow'></div>
									<div className='banner-listado__list'>
										<div className='banner-listado__list__item'>1,000,000 - 2,000,000</div>
										<div className='banner-listado__list__item'>2,000,000 - 3,000,000</div>
										<div className='banner-listado__list__item'>3,000,000 - 4,000,000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='bg-white w-full p-6 flex gap-2 flex-wrap justify-between'>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property1}
								type={'Departamento'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property2}
								type={'Renta'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property3}
								type={'Desarrollo'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property4}
								type={'Conjunto de casas'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property5}
								type={'Preventa'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property6}
								type={'Proyecto'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property1}
								type={'Departamento'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property2}
								type={'Renta'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Property3}
								type={'Desarrollo'}
								price={'$2,800,000'}
								title={'Encanto Roca del Mar'}
								info={'Av del Mar 656, Tellería, 82017 Mazatlán, Sin'}
								rooms={'1, 3'}
								bathrooms={'1, 2'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Propiedades