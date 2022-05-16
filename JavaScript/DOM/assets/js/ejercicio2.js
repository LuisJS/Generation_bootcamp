const formulario = document.getElementById ("form1")
// const button = document.getElementById ("")


function getFormvalue(e)

{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
        e.preventDefault();
        console.log(x.elements[i].value);
     }  
   }
}

formulario.addEventListener("submit",getFormvalue);

const $button = document.getElementById('links');
$button.addEventListener('click', mostrarLinks);

function mostrarLinks() {
    const $links = document.querySelectorAll('a');
    
    $button.addEventListener('click', () => {
        console.log($links.length);
        console.log($links[0]);
        console.log($links[$links.length - 1]);
    })
}