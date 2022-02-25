document.write("Pagina de teste do JS")
var valor = "<p>nelson 999214877</p> <p>joão 999202020</p><p>josé</p> <p>adão</p>"


function mostrar()
{
    var elemento = document.getElementById("teste1");
    elemento.innerHTML = valor;
}