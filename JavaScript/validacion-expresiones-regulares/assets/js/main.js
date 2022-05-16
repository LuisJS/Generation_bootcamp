const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const nameError = document.querySelector('#name-error');
const apellidoError = document.querySelector('#apellido-error');
const emailError = document.querySelector('#email-error');
const passError = document.querySelector('#pass-error');
const phoneError = document.querySelector('#phone-error');
const statusInfo = {
	name: false,
	apellido: false,
	email: false,
	pass: false,
	phone: false
}
//console.log(inputs);

inputs.forEach((input) => {
	//console.log(input);
	input.addEventListener('keyup', (e) => {
		e.preventDefault();
		console.log(e.target.name);

		switch (e.target.name) {
			case 'nombre':
				//validar(e.target, expresiones.nombre);
				if(expresiones.nombre.test(e.target.value)) {
					statusInfo.name = true;
					nameError.textContent = '';
				} else {
					statusInfo.name = false;
					nameError.textContent = 'Nombre invalido';
				}
				break;
				case 'apellido':
				//validar(e.target, expresiones.apellido);
				if(expresiones.nombre.test(e.target.value)) {
					statusInfo.apellido = true;
					nameError.textContent = '';
				} else {
					statusInfo.apellido = false;
					nameError.textContent = 'apellido invalido';
				}
				break;
			case 'password':
				//validar(e.target, expresiones.password);
				if(expresiones.password.test(e.target.value)) {
					statusInfo.pass= true;
					apellidoError.textContent = '';
				} else {
					statusInfo.pass= false;
					apellidoError.textContent = 'Apellido invalido';
				}
				break;
			case 'email':
				//validar(e.target, expresiones.email);
				if(expresiones.email.test(e.target.value)) {
					statusInfo.email = true;
					emailError.textContent = '';
				} else {
					statusInfo.email = false;
					emailError.textContent = 'Email invalido';
				}
				break;
			case 'telefono':
				//validar(e.target, expresiones.telefono);
				if(expresiones.telefono.test(e.target.value)) {
					statusInfo.phone = true;
					phoneError.textContent = '';
				} else {
					statusInfo.phone = false;
					phoneError.textContent = 'Telefono invalido';
				}
				break;
			default:
				break;
		}

	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const terms = document.querySelector('#terminos').checked;
	console.log(terms);
	Object.values(statusInfo).includes(false) ? alert('Existen campos vacíos'): alert('Todos los campos son validos'); 
});

