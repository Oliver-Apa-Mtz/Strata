interface IProps {
	bgImage?: boolean;
	image?: any;
	bgColor?: string;
	title: string;
	info?: string;
}

const BannerToCall = ({ bgImage, image, bgColor, title, info }: IProps) => {
	return (
		<div className="banner-call" style={{ backgroundImage: `url(${image.src})` }}>
			<div className="container lg:py-40 py-20">
				<div className="banner-call__text mx-auto text-center">
					<p className='title-ppal'>{title}</p>
					{info && (
						<p className='banner-call__text_info mt-10'>{info}</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default BannerToCall