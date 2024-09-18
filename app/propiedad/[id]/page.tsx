"use client";
import { useParams } from 'next/navigation';
import '../../../styles/home.css';

const Propiedad = () => {
	const params = useParams();
	const { id } = params;
	return (
		<div className='lg:pt-[100px] pt-[80px]'>
			<div id="home" className="banner-ppal w-screen">
				<div className="container h-full flex items-center gap-4">
					<div className="banner__text w-full">
						<h1 className="mb-10 title-ppal">
							Propiedad {id}
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Propiedad