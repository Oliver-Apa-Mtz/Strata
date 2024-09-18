import dynamic from 'next/dynamic';

import '../../styles/home.css';
const PropertyItem = dynamic(() => import('../../components/PropertyItem'), {
	ssr: false,
});

import Equipo1 from '../../assets/img/equipo-1.webp';
import Equipo2 from '../../assets/img/equipo-2.webp';
import Equipo3 from '../../assets/img/equipo-3.webp';
import Equipo4 from '../../assets/img/equipo-4.webp';
import Equipo5 from '../../assets/img/equipo-5.webp';
import Equipo6 from '../../assets/img/equipo-6.webp';

const Agentes = () => {
	return (
		<div className='lg:pt-[100px] pt-[80px]'>
			<div id="agente" className="banner-ppal w-screen h-[850px]">
				<div className="container h-full flex items-center gap-4">
					<div className="banner__text w-full">
						<h1 className="mb-10 title-ppal">
							Nuestros agentes
						</h1>
						<h2 className="mb-6 sm:text-base subtitle">
							Soluciones inmobiliarias de alto valor en Mazatlán, Sinaloa.
						</h2>
					</div>
				</div>
			</div>

			<div className='banner-line py-20'>
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

export default Agentes