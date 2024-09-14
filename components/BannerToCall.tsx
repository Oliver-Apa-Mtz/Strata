interface IProps {
	bgImage?: boolean;
	image?: any;
	bgColor?: string;
	title: string;
}

const BannerToCall = ({ bgImage, image, bgColor, title }: IProps) => {
	return (
		<div className="banner-call" style={{ backgroundImage: `url(${image.src})` }}>
			<div className="container py-40">
				<div className="banner-call__text mx-auto text-center">
					<p className='title-ppal'>{title}</p>
				</div>
			</div>
		</div>
	)
}

export default BannerToCall