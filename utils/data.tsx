export const DataList = [
	{
		"id": 1,
		"image": "https://strata-sooty.vercel.app/_next/static/media/property-1.d8859e7a.webp",
		"type": "Departamento",
		"price": 2800000,
		"title": "Encanto Roca del Mar",
		"info": "Av del Mar 656, Tellería, 82017 Mazatlán, Sin",
		"zone": "Norte",
		"rooms": "1, 3",
		"bathrooms": "1, 2"
	},
	{
		"id": 2,
		"image": "https://strata-sooty.vercel.app/_next/static/media/property-2.2d4c1442.webp",
		"type": "Renta",
		"price": 1800000,
		"title": "Encanto Roca del Mar",
		"info": "Av del Mar 656, Tellería, 82017 Mazatlán, Sin",
		"zone": "Sur",
		"rooms": "1, 3",
		"bathrooms": "1, 2"
	},
	{
		"id": 3,
		"image": "https://strata-sooty.vercel.app/_next/static/media/property-3.ea20f941.webp",
		"type": "Desarrollo",
		"price": 3800000,
		"title": "Encanto Roca del Mar",
		"info": "Av del Mar 656, Tellería, 82017 Mazatlán, Sin",
		"zone": "Centro",
		"rooms": "1, 3",
		"bathrooms": "1, 2"
	},
	{
		"id": 4,
		"image": "https://strata-sooty.vercel.app/_next/static/media/property-4.75e99f81.webp",
		"type": "Conjunto de casas",
		"price": 2800000,
		"title": "Encanto Roca del Mar",
		"info": "Av del Mar 656, Tellería, 82017 Mazatlán, Sin",
		"zone": "Norte",
		"rooms": "1, 3",
		"bathrooms": "1, 2"
	},
	{
		"id": 5,
		"image": "https://strata-sooty.vercel.app/_next/static/media/property-5.33e966d3.webp",
		"type": "Preventa",
		"price": 1800000,
		"title": "Encanto Roca del Mar",
		"info": "Av del Mar 656, Tellería, 82017 Mazatlán, Sin",
		"zone": "Alrededores",
		"rooms": "1, 3",
		"bathrooms": "1, 2"
	},
	{
		"id": 6,
		"image": "https://strata-sooty.vercel.app/_next/static/media/property-6.2d8d3284.webp",
		"type": "Proyecto",
		"price": 3800000,
		"title": "Encanto Roca del Mar",
		"info": "Av del Mar 656, Tellería, 82017 Mazatlán, Sin",
		"zone": "Centro",
		"rooms": "1, 3",
		"bathrooms": "1, 2"
	},
]

export const formatPrice = (price: number) => {
	return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};