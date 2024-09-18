"use client";
import { useState } from 'react'
import '../styles/form.css';
import Button from './Button';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		message: '',
		type: ''
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		if (name === 'phone') {
			if (!isNaN(value) && value.length < 10) {
				setFormData({
					...formData,
					['phone']: value
				});
			} else {
				return;
			}
		} else if (name === 'name') {
			if (value.length < 40) {
				setFormData({
					...formData,
					[name]: value
				});
			} else {
				return;
			}
		} else {
			setFormData({
				...formData,
				[name]: value
			});
		}
	};
	return (
		<div className="form">
			<div className="container">
				<p className="banner-info__text__title mt-10 mb-12 text-center">Contáctanos</p>
				<div className='form__container w-full mx-auto'>
					<input className='form__input w-full' type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
					<input className='form__input w-full' type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
					<select name="type" className="form__input w-full bg-white" value={formData.type} onChange={handleChange}>
						<option value=''>Tipo de propiedad</option>
						<option value="renta">Renta</option>
					</select>
					<textarea className='form__input w-full mb-10 h-[150px]' name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} />
					<Button text='Enviar mensaje' type='secondary' position='left' />
				</div>
			</div>
		</div>
	)
}

export default Form