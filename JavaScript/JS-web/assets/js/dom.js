/* alert('Hola'); */
/* Algunas cosas que podemos hacer con DOM */
console.log(window.document);
console.log(document);
console.log(document.head); // Regresa el head del documento
console.log(documento.body); // Regresa el body del documento
console.log(document.documentElement) //Regresa todo el html
console.log(document.doctype); // Regresa la etiqueta del doctype
console.log(document.characterSet); // Regresa la codificación de los caracteres
console.log(document.images); 
console.log(document.styleSheets); // Regresa los CSS
console.log(document.links);
console.log(document.scripts); // Regresa las etiquetas script
console.log(document.getSelection().toString());
setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);
document.write('Hola mundo desde document write'); //Se puede usar para mostrar o insertar datos en el body de un html
document.write('<h1>Hola mundo desde document write</h1>');