"use client";
import { useEffect, useState } from 'react';

declare const window: any;

interface Location {
	title: string;
	lat: number;
	lng: number;
}

interface IProps {
	dataPin: Location[];
}

const MapComponent = ({ dataPin }: IProps) => {
	const [mapLoaded, setMapLoaded] = useState(false);

	const loadGoogleMapsScript = () => {
		if (!document.getElementById('google-maps-script')) {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA58x6cmlLFtIYXbVQzGPgHtejcJSRuQ9w`;
			script.id = 'google-maps-script';
			script.async = true;
			script.defer = true;
			script.onload = () => setMapLoaded(true);
			document.body.appendChild(script);
		} else {
			setMapLoaded(true);
		}
	};

	useEffect(() => {
		loadGoogleMapsScript();
	}, []);

	useEffect(() => {
		if (mapLoaded && window.google) {
			const map = new window.google.maps.Map(document.getElementById('map'), {
				center: { lat: 23.2486053, lng: -106.4449214 },
				zoom: 13,
			});
			if (dataPin) {
				const locations: any[] = [];
				dataPin.forEach((location) => {
					locations.push({
						position: { lat: location.lat, lng: location.lng },
						title: location.title,
						icon: {
							url: "https://icons.veryicon.com/png/o/miscellaneous/high-icon-library/marker-19.png",
							scaledSize: new window.google.maps.Size(40, 40),
						},
					});
				});
				if (locations.length > 0) {
					locations.forEach((location) => {
						new window.google.maps.Marker({
							position: location.position,
							map: map,
							title: location.title,
							icon: location.icon,
						});
					});
				}
			} else {
				new window.google.maps.Marker({
					position: { lat: 23.2686053, lng: -106.4449214 },
					map: map,
					title: "Strata",
					icon: {
						url: "https://icons.veryicon.com/png/o/miscellaneous/high-icon-library/marker-19.png",
						scaledSize: new window.google.maps.Size(40, 40),
					},
				});
			}
		}
	}, [mapLoaded]);

	return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;