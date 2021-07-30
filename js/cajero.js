let imagenes = [];
imagenes['200'] = './images/200.jpg';
imagenes['100'] = './images/100.jpg';
imagenes['50'] = './images/50.jpg';
imagenes['20'] = './images/20.jpeg';
imagenes['10'] = './images/10.jpg';

class Billete{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
        this.imagen=new Image();
        this.imagen.src = imagenes[this.valor];/* Moneda peruana = Soles */
    }

}

function entregarDinero(){
    let dineroSolicitado = document.getElementById('dinero');/* Caja de texto */
    dinero = parseInt(dineroSolicitado.value);
    for(let bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero/bi.valor);

            if(div > bi.cantidad){
                papeles = bi.cantidad;
            } else{
                papeles = div;
            }

            entregado.push(new Billete(bi.valor,papeles,bi.imagen.src));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero % 10 > 0 ){
        /* document.write('Lo siento saldo insuficiente'); */
        resultado.innerHTML= 'Lo siento, saldo insuficiente <br>';
        alert('Solo se emiten billetes multiplos de 10\n Por favor, Ingrese otro monto');
    }
    else{
        for(let e of entregado){
            if(e.cantidad > 0){
                /* document.write(e.cantidad + 'billetes de S/.' + e.valor + '<br>'); */
            resultado.innerHTML += e.cantidad + ' billetes de S/. ' + e.valor + '<br>';
            cheque.appendChild(e.imagen);
            }

        };
    }

}

let caja=[];
caja.push(new Billete(200,5,'./images/200.jpg'));
caja.push(new Billete(100, 5,'./images/100.jpg'));
caja.push(new Billete(50, 10,'./images/50.jpg'));
caja.push(new Billete(20, 30,'./images/20.jpeg'));
caja.push(new Billete(10, 20,'./images/10.jpg'));

let entregado=[];
let dinero = 0; /* Solicitado por el cliente */
let div=0;
let papeles=0;


let cobrar= document.getElementById('extraer');
cobrar.addEventListener('click', entregarDinero);

let cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', cancelarOperacion);
/* Para mostrar resultados */
let resultado = document.getElementById('resultado');
let cheque = document.getElementById('cheque');

function cancelarOperacion(){
    resultado.innerHTML = "";
    cheque.innerHTML="";
}