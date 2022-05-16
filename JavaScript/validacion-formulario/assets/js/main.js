const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector('form');
/* console.log(formulario); */
const inputs = document.querySelectorAll('input');
/* console.log(inputs); */
const nombreError = document.getElementById('errorNombre');
console.log(nombreError);
const apellidoError = document.querySelector('#errorApellido');
const emailError = document.querySelector('#errorEmail');
const passwordError = document.querySelector('#errorPassword');
const telefonoError = document.querySelector('#errorTelefono');
const estadoInf = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false
}
inputs.forEach((input)=>{ // "forEach" ejecuta la función indicada una vez por cada elemento del array.
/* 	console.log(input); */
	input.addEventListener('keyup',(e)=>{
		console.log(e.target.name);
		switch (e.target.name) {
			case "nombre":
				/* console.log(expresiones.nombre.test(e.target.value)); */ //  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
				if(expresiones.nombre.test(e.target.value)) {
					// console.log("Nombre correcto");
					estadoInf.nombre = true;
					nombreError.textContent = " ";
				} else {
					// console.log("Nombre incorrecto");
					estadoInf.nombre = false;
					nombreError.textContent = "Error"
				}
				break;
			case "apellido":
				if(expresiones.nombre.test(e.target.value)) {
					// console.log("Nombre correcto");
					estadoInf.apellido = true;
					apellidoError.textContent = " ";
				} else {
					// console.log("Nombre incorrecto");
					estadoInf.apellido = false;
					apellidoError.textContent = "Error";
				}
				break;
			case "email":
				if(expresiones.email.test(e.target.value)) {
					// console.log("Nombre correcto");
					estadoInf.email = true;
					emailError.textContent = " ";
				} else {
					// console.log("Nombre incorrecto");
					estadoInf.email = false;
					emailError.textContent = "Error";
				}
				break;
			case "password":
				if(expresiones.password.test(e.target.value)) {
					// console.log("Nombre correcto");
					estadoInf.password = true;
					passwordError.textContent = " ";
				} else {
					// console.log("Nombre incorrecto");
					estadoInf.password = false;
					passwordError.textContent = "Error";
				}
				break;
			case "telefono":
				if(expresiones.telefono.test(e.target.value)) {
					// console.log("Nombre correcto");
					estadoInf.telefono = true;
					telefonoError.textContent = " ";
				} else {
					// console.log("Nombre incorrecto");
					estadoInf.telefono = false;
					telefonoError.textContent = "Error";
				}
				break;
		}
	})
});
formulario.addEventListener('submit', (e)=> {
	e.preventDefault(); // Evita que la página se recargue.
	/* Object.values(estadoInf).includes(false); */
	const check = document.querySelector("#terminos").checked;
	if(!Object.values(estadoInf).includes(false) && check==true) {
		/* console.log("Enviado"); */
		document.querySelector('.alert-danger').style.display = 'none';
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos);
		formulario.reset();

	} else {
		/* console.log("No enviado"); */
		document.querySelector('.alert-danger').style.display = 'none';
	}
});