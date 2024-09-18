import '../../styles/home.css';
import Image from 'next/image';
import BannerToCall from '../../components/BannerToCall';
import PropertyItem from '../../components/PropertyItem';

import BannerCall1 from '../../assets/img/banner-call-2.webp';
import ImageBanner1 from '../../assets/img/image-post-3.webp';

import Property1 from '../../assets/img/property-13.webp';
import Property2 from '../../assets/img/property-14.webp';
import Property3 from '../../assets/img/property-15.webp';

import LogoAmpi from '../../assets/img/icono-ampi-large.svg';
import IconoBeneficio1 from '../../assets/img/icono-beneficio-1.svg';
import IconoBeneficio2 from '../../assets/img/icono-beneficio-2.svg';
import IconoBeneficio3 from '../../assets/img/icono-beneficio-3.svg';

import Equipo1 from '../../assets/img/equipo-1.webp';
import Equipo2 from '../../assets/img/equipo-2.webp';
import Equipo3 from '../../assets/img/equipo-3.webp';
import Equipo4 from '../../assets/img/equipo-4.webp';
import Equipo5 from '../../assets/img/equipo-5.webp';
import Equipo6 from '../../assets/img/equipo-6.webp';

const Nosotros = () => {
	return (
		<div className='lg:pt-[100px] pt-[80px]'>
			<div className='banner-info--custom relative'>
				<div className='container xl:h-[660px] flex justify-between items-center'>
					<div className='banner-info__text lg:basis-7/12 basis-full lg:mb-0 mb-10'>
						<p className='banner-info__text__custom'>Historia de Strata</p>
						<p className='banner-info__text__title my-6'>Nosotros</p>
						<p className='banner-info__text__subtitle mb-6'>
							Fundada en 2023, Strata nace con el objetivo de ofrecer
							soluciones inmobiliarias excepcionales en Mazatlán, Sinaloa.
						</p>
						<p className='banner-info__text__text'>
							Aunque la empresa es joven, nuestro equipo cuenta con más de
							10 años de experiencia en el sector inmobiliario, combinando
							innovación, profesionalismo y un profundo conocimiento del
							mercado local.
						</p>
					</div>
					<div className='banner-info__images lg:basis-5/12 relative basis-full lg:block hidden'>
					</div>
				</div>
				<Image src={ImageBanner1} alt="" className='xl:h-[780px] lg:h-[500px] lg:w-max md:w-[50%] w-[80%] lg:absolute relative lg:top-0 lg:right-0 -z-1 mx-auto' />
			</div>

			<BannerToCall
				bgImage={true}
				image={BannerCall1}
				title={'Especialistas en la comercialización de proyectos inmobiliarios de alto valor'}
				info={'y en la administración de propiedades con fines de renta vacacional, ofrecemos un servicio integral tanto a compradores e inversionistas como a propietarios.'}
			/>

			<div className='banner-data py-20'>
				<div className='container'>
					<div className='text-center'>
						<Image src={LogoAmpi} alt="" className='banner-info__icono__image mx-auto mb-10 md:w-max w-[100px]' />
						<p className='banner-info__text__title mb-12'>
							Miembros de la Asociación Mexicana de Profesionales Inmobiliarios
						</p>
						<p className='banner-info__text__subtitle mb-6'>
							Como miembros de la Asociación Mexicana de Profesionales
							Inmobiliarios (AMPI), seguimos las mejores prácticas del
							sector y nos mantenemos actualizados con las últimas
							tendencias y regulaciones, garantizando a nuestros clientes
							la confianza y seguridad en sus inversiones.
						</p>
					</div>
					<div className='w-full p-6 flex lg:gap-2 gap-10 flex-wrap lg:justify-between justify-center'>
						<div className='banner-data__item lg:mb-6'>
							<PropertyItem
								image={Property1}
							/>
						</div>
						<div className='banner-data__item lg:mb-6'>
							<PropertyItem
								image={Property2}
							/>
						</div>
						<div className='banner-data__item lg:mb-6'>
							<PropertyItem
								image={Property3}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-blue lg:py-20 py-10'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-blue__title lg:mb-32 mb-10'>Contribuimos con:</p>
					</div>
					<div className='flex xl:justify-between justify-center gap-4 flex-wrap'>
						<div className='text-center'>
							<div className='sm:h-[115px] flex items-start justify-center'>
								<Image src={IconoBeneficio1} alt="" className='banner-blue__image' />
							</div>
							<p className='banner-blue__info'>crecimiento del sector inmobiliario</p>
						</div>
						<div className='text-center'>
							<div className='sm:h-[115px] flex items-start justify-center'>
								<Image src={IconoBeneficio2} alt="" className='banner-blue__image' />
							</div>
							<p className='banner-blue__info'>propiedades exclusivas</p>
						</div>
						<div className='text-center'>
							<div className='sm:h-[115px] flex items-start justify-center'>
								<Image src={IconoBeneficio3} alt="" className='banner-blue__image' />
							</div>
							<p className='banner-blue__info'>más altos estándares de calidad y confort.</p>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-data relative py-[90px]'>
				<div className='container xl:h-[591px] lg:h-[327px] flex justify-between items-center'>
					<div className='banner-info__images basis-5/12 relative lg:block hidden'>
					</div>
					<div className='banner-info__text banner-info__text--large basis-7/12 lg:text-right text-center lg:flex lg:justify-end flex-wrap lg:mb-0 mb-10'>
						<p className='banner-info__text__title xl:mt-6 lg:-mt-16 -mt-8 lg:-mb-6 mb-6'>Calidad y satisfacción</p>
						<div className='banner-info__text'>
							<p className='banner-info__text__subtitle mb-6'>
								Cada proyecto es una oportunidad para demostrar nuestro compromiso
								con la calidad y la satisfacción del cliente.
							</p>
							<p className='banner-info__text__text'>
								Nos dedicamos a construir relaciones duraderas basadas en la
								confianza y el éxito compartido, creciendo junto con nuestros
								clientes y la comunidad de Mazatlán.
							</p>
						</div>
					</div>
				</div>
				<Image src={ImageBanner1} alt="" className='xl:w-[730px] lg:w-[480px] lg:h-max md:w-[50%] w-[80%] lg:absolute relative top-0 left-0 -z-1 mx-auto' />
			</div>

			<div className='banner-blue py-20'>
				<div className='container'>
					<div className='banner-blue__container mx-auto text-center'>
						<p className='banner-blue__title mb-8'>Objetivo de Strata</p>
						<p className='banner-blue__subtitle'>
							En PropertyByStrata, nos dedicamos a ofrecer soluciones
							inmobiliarias excepcionales en Mazatlán,
						</p>
						<p className="banner-blue__text">
							combinando <span>innovación, profesionalismo</span> y un profundo
							<span>conocimiento del mercado local</span>. Nos comprometemos a
							superar nuestras metas de ventas anuales y atraer nuevos
							clientes, asegurando un <span>crecimiento constante y sostenible</span>.
							Buscamos aumentar nuestra presencia en redes sociales
							para conectar de manera efectiva con nuestra audiencia.
							Mantener a nuestro personal preparado mediante programas
							de capacitación continua es fundamental para nuestro éxito.
							En todo lo que hacemos, ponemos las necesidades de nuestros
							clientes en primer lugar, alcanzando estos objetivos con
							<span>dedicación y excelencia</span>.
						</p>
					</div>
				</div>
			</div>

			<div className='bg-white py-20'>
				<div className='container'>
					<div className='text-center'>
						<p className='banner-info__text__title mb-12'>
							Equipo de trabajo
						</p>
					</div>
					<div className='w-full p-6 flex gap-2 flex-wrap justify-between'>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Equipo1}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Equipo2}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Equipo3}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Equipo4}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Equipo5}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
						<div className='banner-data__item mb-6'>
							<PropertyItem
								image={Equipo6}
								title={'Lorem ipsum dolor sit amet'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nosotros