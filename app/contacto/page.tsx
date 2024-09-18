import dynamic from 'next/dynamic';
import Image from 'next/image';

import '../../styles/home.css';
import '../../styles/footer.css';
const Form = dynamic(() => import('../../components/Form'), {
	ssr: false,
});

import ImageBanner1 from '../../assets/img/mapa-small.webp';
import IconoPhone from '../../assets/img/icono-phone-footer.webp';
import IconoPin from '../../assets/img/icono-pin-footer.webp';
import IconoCall from '../../assets/img/icono-call-footer.webp';

const Contacto = () => {
	return (
		<div className="lg:pt-[100px] pt-[80px]">
			<div className='banner-blue py-20'>
				<div className='container'>
					<div className='banner-blue__container mx-auto text-center'>
						<p className='banner-blue__title mb-4'>Datos de Contacto</p>
					</div>
				</div>
			</div>

			<div className='banner-info--map relative'>
				<div className='container flex justify-between items-center flex-wrap'>
					<div className='banner-info__text--large lg:basis-1/2 basis-full lg:mx-0 mx-auto'>
						<p className='banner-info__text__title lg:text-left text-center lg:mb-0 mb-10'>Cómo encontrarnos</p>
						<div className='banner-info__text'>
							<div className="flex footer__item__container--large lg:w-[90%] w-full lg:flex-nowrap flex-wrap">
								<Image src={IconoPhone} alt="Contáctanos" className='w-[70px] h-max lg:mr-5 mx-auto' />
								<div className='w-full'>
									<p className='footer__item__text'>Contáctanos</p>
									<a href="" className='footer__item__link block'>Teléfono: 669 138 8434</a>
									<a href="" className='footer__item__link block'>Whatsapp: 669 138 8434</a>
								</div>
							</div>
							<div className="flex items-center footer__item__container--large footer__item__container--line lg:w-[90%] w-full lg:flex-nowrap flex-wrap">
								<Image src={IconoPin} alt="Localización" className='w-[70px] h-max lg:mr-5 mx-auto' />
								<div className='w-full'>
									<p className='footer__item__text'>Localización</p>
									<a href="" className='footer__item__link'>Avenida Doctor Carlos Canseco. 6000-6 82133. Mazatlán, Sinaloa.</a>
								</div>
							</div>
							<div className="flex footer__item__container--large lg:w-[90%] w-full lg:flex-nowrap flex-wrap">
								<Image src={IconoCall} alt="Servicio al cliente" className='w-[70px] h-max lg:mr-5 mx-auto' />
								<div className='w-full'>
									<p className='footer__item__text'>Servicio al cliente</p>
									<a href="" className='footer__item__link'>contacto@propertybystrata.com</a>
								</div>
							</div>
						</div>
					</div>
					<div className='banner-info__images lg:basis-1/2 basis-full lg:mt-0 mt-10'>
						<Image src={ImageBanner1} alt="Cómo encontrarnos" className='banner-info__images__item lg:mx-0 mx-auto' />
					</div>
				</div>
				<Form />
			</div>
		</div>
	)
}

export default Contacto