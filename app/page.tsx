import '../styles/home.css';
import Button from '../components/Button';
import BannerToCall from '../components/BannerToCall';
import PropertyItem from '../components/PropertyItem';
import Image from 'next/image';

import BannerEffect1 from '../assets/img/line-effect-1.webp';
import ImageBanner1 from '../assets/img/image-post-1.webp';
import LogoAmpi from '../assets/img/icono-ampi.svg';
import BannerCall1 from '../assets/img/banner-call-1.webp';

//Propiedades
import Property1 from '../assets/img/property-1.webp';
import Property2 from '../assets/img/property-2.webp';
import Property3 from '../assets/img/property-3.webp';
import Property4 from '../assets/img/property-4.webp';
import Property5 from '../assets/img/property-5.webp';
import Property6 from '../assets/img/property-6.webp';

export default function Home() {
	return (
		<div>
			<div id="home" className="banner-ppal w-screen h-[850px]">
				<div className="container h-full flex items-center gap-4">
					<div className="banner__text w-full">
						<h1 className="mb-10 title-ppal">
							Soluciones inmobiliarias de alto valor
						</h1>
						<h2 className="mb-6 sm:text-base subtitle">
							Soluciones inmobiliarias de alto valor en Mazatlán, Sinaloa.
						</h2>
						<Button text='Shop now' type='primary' position='left' />
					</div>
				</div>
			</div>

			<div className='banner-info relative'>
				<div className='container flex justify-between'>
					<div className='banner-info__text basis-1/2'>
						<p className='banner-info__text__custom'>Quiénes Somos</p>
						<p className='banner-info__text__title my-6'>Nosotros</p>
						<p className='banner-info__text__subtitle mb-6'>
							En Strata, fundada en 2023, nuestra empresa combina innovación
							y profesionalismo con más de 10 años de experiencia en el sector
							inmobiliario.
						</p>
						<p className='banner-info__text__text'>
							Nos especializamos en la comercialización de proyectos exclusivos
							y en la administración de propiedades con fines de renta vacacional.
							Como miembros de la Asociación Mexicana de Profesionales Inmobiliarios
							(AMPI), seguimos las mejores prácticas del sector y nos mantenemos
							actualizados con las últimas tendencias y regulaciones, asegurando la
							confianza y seguridad en las inversiones de nuestros clientes.
						</p>
						<div className='banner-info__icono flex items-center mt-6 mb-12'>
							<Image src={LogoAmpi} alt="" className='banner-info__icono__image' />
							<p className='banner-info__icono__text'>
								Miembros de la Asociación Mexicana de Profesionales Inmobiliarios (AMPI)
							</p>
						</div>
						<Button text='Contáctanos' type='secondary' position='left' />
					</div>
					<div className='banner-info__images basis-1/2 relative z-10 flex justify-end'>
						<Image src={ImageBanner1} alt="" className='banner-info__images__item' />
						<div className='banner-info__images__item--custom'></div>
					</div>
				</div>
				<Image src={BannerEffect1} alt="" className='h-full absolute top-0 right-0 -z-1' />
			</div>

			<BannerToCall bgImage={true} image={BannerCall1} title={'Nuestro compromiso con la calidad y la satisfacción del cliente es el núcleo de todo lo que hacemos.'} />

			<div className='banner-data py-20'>
				<div className='container'>
					<div className='banner-data__text text-center'>
						<p className='banner-info__text__subtitle mb-6'>
							Nos enorgullece contribuir al crecimiento del sector inmobiliario
							en Mazatlán, ofreciendo propiedades que cumplen con los más altos
							estándares de confort. En Strata, construimos relaciones duraderas
							basadas en la confianza y el éxito compartido, creciendo junto con
							nuestros clientes y la comunidad.
						</p>
						<p className='banner-info__text__title mt-10 mb-12'>Propiedades</p>
					</div>
					<div className='banner-data__container w-full p-6 flex gap-2 flex-wrap justify-between'>
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
					</div>
					<div className='pt-20'>
						<Button text='Contáctanos' type='secondary' position='center' />
					</div>
				</div>
			</div>
		</div>
	);
}
