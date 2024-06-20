'use strict';

// se crea la clase Signo
class Signo {
    //variables
    fechaNacimiento;
    horaNacimiento;
    signoSolar; 

    //constructor
    constructor(fechaNacimiento, horaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
        this.horaNacimiento = horaNacimiento;

        console.log(`signo obj nuevo ${this.fechaNacimiento} ${this.horaNacimiento}`);    
    }

    //metodos
    calcularSolar() {
        // fecha format: yyyy-mm-dd

        // extraigo los digitos de dia, mes y año del string fecha
        let dia = parseInt(this.fechaNacimiento.substr(9,2));
        let mes = parseInt(this.fechaNacimiento.substr(5,2)); 

        // asigno el signo solar correspondiente dependiendo del mes y dia extraidos
        switch(mes) {
            case 1: //enero
                if(dia <= 21) {
                    this.signoSolar = "Capricornio"
                }
                else {
                    this.signoSolar = "Acuario"
                }
                break;
            case 2: //febrero
                if(dia <= 20) {
                    this.signoSolar = "Acuario"
                }
                else {
                    this.signoSolar = "Piscis"
                }
                break;
            case 3: //marzo
                if(dia <= 19) {
                    this.signoSolar = "Piscis"
                }
                else {
                    this.signoSolar = "Aries"
                }
                break;
            case 4: //abril
                if(dia <= 20) {
                    this.signoSolar = "Aries"
                }
                else {
                    this.signoSolar = "Tauro"
                }
                break;
            case 5: //mayo
                if(dia <= 21) {
                    this.signoSolar = "Tauro"
                }
                else {
                    this.signoSolar = "Géminis"
                }
                break;
            case 6: //junio
                if(dia <= 22) {
                    this.signoSolar = "Géminis"
                }
                else {
                    this.signoSolar = "Cáncer"
                }
                break;
            case 7: //julio
                if(dia <= 22) {
                    this.signoSolar = "Cáncer"
                }
                else {
                    this.signoSolar = "Leo"
                }
                break;
            case 8: //agosto
                if(dia <= 22) {
                    this.signoSolar = "Leo"
                }
                else {
                    this.signoSolar = "Virgo"
                }
                break;
            case 9: //septiembre
                if(dia <= 22) {
                    this.signoSolar = "Virgo"
                }
                else {
                    this.signoSolar = "Libra"
                }
                break;
            case 10: //octubre
                if(dia <= 22) {
                    this.signoSolar = "Libra"
                }
                else {
                    this.signoSolar = "Escorpio"
                }
                break;
            case 11: //noviembre
                if(dia <= 22) {
                    this.signoSolar = "Escorpio"
                }
                else {
                    this.signoSolar = "Sagitario"
                }
                break;
            case 12: //diciembre
                if(dia <= 22) {
                    this.signoSolar = "Sagitario"
                }
                else {
                    this.signoSolar = "Capricornio"
                }
                break;
        }
        return this.signoSolar;
    }

    calcularAscendente() {
        // hora format: hh-mm en formato de 24hs: 00:00 -> 23:59

        // extraigo los digitos de hora y minuto del string hora y el anio del string fecha
        let hh = parseInt(this.horaNacimiento.substr(0,2));
        let mm = parseInt(this.horaNacimiento.substr(3,2));
        let anio = parseInt(this.fechaNacimiento.substr(0,4));

        // calculo de la hora real dependiendo del año de nacimiento
        /*
            Si el año de nacimiento fue entre 1946 y 1976 hay que restarle 1 hora,
            Si el año de nacimiento fue entre 1977 y antes del 2000, hay que restarle 2 horas,
            En caso contrario, no se modifica la hora.
            Si nació a las 00hs o 01am, no se puede restar 1 o 2 horas porque podría quedar negativo
            en ese caso se valida previamente la hora, para dejarla en formato de 24hs.
        */
        if((anio >= 1946) && (anio <= 1976)) {
            if(hh == 0) {
                hh = 23
            }
            else {
                hh -= 1
            }
        }
        if((anio > 1976) && (anio < 2000)) {
            if(hh == 0) {
                hh = 22
            }
            else if(hh == 1) {
                hh = 23
            }
            else {
                hh -= 2
            } 
        }

        // paso hh y mm a minutos. Va a servir para saber en cual columna debo buscar.
        let hhmmEnMinutos = (hh * 60) + mm
        console.log(`hh = ${hh} y mm = ${mm}`)
        console.log(`hhmmEnMinutos es = ${hhmmEnMinutos}`)


        // array multidimencional con el orden de los signos dependiendo de cual es el solar(el primer signo del array)
        // format arrayMulti: [fila][columna]
        let ordenSignos = [
        //         06-08   08-10    10-12    12-14   14-16  16-18   18-20    20-22      22-24         24-02       02-04    04-06
        /*0*/    ["Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"],
        /*1*/    ["Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries"],
        /*2*/    ["Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro"],
        /*3*/    ["Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis"],
        /*4*/    ["Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer"],
        /*5*/    ["Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo"],
        /*6*/    ["Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo"],
        /*7*/    ["Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra"],
        /*8*/    ["Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio"],
        /*9*/    ["Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario"],
        /*10*/   ["Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio"],
        /*11*/   ["Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario"]
        ]

        let rangoHorario = [361, 481, 601, 721, 841, 961, 1081, 1201, 1321, 1441,  121, 241]

        /*
            como previamente se calcula el signo solar, eso permite saber en cual de las filas del array multidimensional se debe evaluar el signo ascendente. 
            Ejemplo, si el signo solar es Virgo, debo ir a ordenSignos[5] y evaluar ese array
        */
        
        let columnaAnterior;
        let ascendenteYDescripcion = []

        for(let fila = 0; fila <= 11; fila++) {
            if(this.signoSolar == ordenSignos[fila][0]) { // encuentro la fila donde esta mi signo solar en el indice 0.
                console.log(`encontre la fila de mi signo solar`)
                for(let columna = 0; columna <= 11; columna++) {
                    // itero el array de la fila seleccionada, usando el array rangoHorario como parametro de las horas
                    if(columna == 0){
                        columnaAnterior = 11;
                    }
                    else {
                        columnaAnterior = columna - 1;
                    }
                    if(
                        ((hhmmEnMinutos < rangoHorario[columna]) && (hhmmEnMinutos >= rangoHorario[columnaAnterior])) 
                        || ((columna == 10) && (hhmmEnMinutos < rangoHorario[columna]))
                      ) {
                        // encontre el indice donde esta el signo ascendente. Lo agrego al array de ascendente y descripcion del ascendente
                        console.log(`ascendente encontrado en funcion calcularAscendente es ${ordenSignos[fila][columnaAnterior]}`);
                        ascendenteYDescripcion.push(ordenSignos[fila][columnaAnterior]);
                    }            
                }
            }
        }

        // una vez hallado el ascendente, le asigno la descripcion correspondiente. Lo agrego al array.
        switch(ascendenteYDescripcion[0]) {
            case "Aries":
                ascendenteYDescripcion.push("Los ascendente en Aries suelen ser enérgicas, impulsivas y directas. Les gusta liderar y tomar decisiones rápidas.");
                break;
            case "Tauro":
                ascendenteYDescripcion.push("Los ascendente en Tauro son pacientes, perseverantes y amantes del lujo y la comodidad. Les gusta disfrutar de la belleza y la buena comida.");
                break;
            case "Géminis":
                ascendenteYDescripcion.push("Los ascendente en Géminis son comunicativos, curiosos y adaptables. Les gusta aprender cosas nuevas y socializar.");
                break;
            case "Cáncer":
                ascendenteYDescripcion.push("Los ascendente en Cáncer son sensibles, protectores y cariñosos. Les gusta sentirse seguros y proteger a sus seres queridos.");
                break;
            case "Leo":
                ascendenteYDescripcion.push("Los ascendente en Leo son creativos, generosos y carismáticos. Les gusta ser el centro de atención y recibir elogios.");
                break;
            case "Virgo":
                ascendenteYDescripcion.push("Los ascendente en Virgo son detallistas, perfeccionistas y prácticos. Les gusta organizar y planificar todo al detalle.");
                break;
            case "Libra":
                ascendenteYDescripcion.push("Los ascendente en Libra son amables, equilibradas y diplomáticas. Les gusta la armonía y la belleza en todas las áreas de su vida.");
                break;
            case "Escorpio":
                ascendenteYDescripcion.push("Los ascendente en Escorpio son intensas, magnéticas y misteriosas. Les gusta investigar y descubrir la verdad oculta.");
                break;
            case "Sagitario":
                ascendenteYDescripcion.push("Los ascendente en Sagitario son aventureros, optimistas y filosóficos. Les gusta viajar, aprender y expandir sus horizontes.");
                break;
            case "Capricornio":
                ascendenteYDescripcion.push("Los ascendente en Capricornio son disciplinadas, responsables y ambiciosas. Les gusta trabajar duro para alcanzar sus metas.");
                break;
            case "Acuario":
                ascendenteYDescripcion.push("Los ascendente en Acuario son originales, independientes y humanitarios. Les gusta luchar por causas sociales y ser diferentes.");
                break;
            case "Piscis":
                ascendenteYDescripcion.push("Los ascendente en Piscis son intuitivos, compasivos y soñadores. Les gusta la espiritualidad y la conexión con lo divino.");
                break;
        }

        // retorno el array con el ascendente y descripcion asignada.
        return ascendenteYDescripcion;
    }

    // getters
    get getSignoSolar() {
        //retorna un string con el nombre del signo solar
        return this.calcularSolar();
    }
    
    get getAscendenteYDescripcion() {
        // retorna un array con el signo ascendente y su descripcion
        return this.calcularAscendente();
    }
}


const docu = document;

// funcion que se ejecuta en el evento de click del boton de calcular
function eventoCalcularAscendente() {
    //reseteo el mensaje
    let mensaje = docu.querySelector('.mensaje_advertencia');
    mensaje.innerHTML = '';

    //obtengo los valores de los inputs
    let nombrePersona = docu.querySelector('#nombre_ascendente').value;
    let fechaNacimientoPersona = docu.querySelector('#fecha_nacimiento').value;
    let horaNacimientoPersona = docu.querySelector('#hora_nacimiento').value;

    //verifico que el usuario haya ingresado los datos antes de presionar el boton
    if(!nombrePersona || !fechaNacimientoPersona || !horaNacimientoPersona) {
        // en caso de que algun dato del formulario no lo haya completado, muestro mensaje por pantalla
        mensaje.style.color = 'red';
        mensaje.innerHTML = 'Debe completar todo el formulario para calcular el ascendente';
        return;
    }
    
    // creo el objeto de la clase Signo
    const objSigno = new Signo(fechaNacimientoPersona, horaNacimientoPersona);

    console.log(`el ascendente calculado para el signo solar ${objSigno.getSignoSolar} es el ascendente ${objSigno.getAscendenteYDescripcion[0]} y su descripcion es ${objSigno.getAscendenteYDescripcion[1]}`)
    
    // extraigo el bloque de ascendente
    let bloqueAscendente = docu.querySelector('.bloque_ascendente');

    // en base a bloqueAscendente extraigo cada hijo por separado
    let h3TituloAscendente = bloqueAscendente.firstElementChild;
    let parrafoSignoAscendente = bloqueAscendente.children[1].firstElementChild;
    let parrafoDescripcionAscendente = bloqueAscendente.children[2];
    let divSignoAscendente = bloqueAscendente.children[1];

    // estilos para el div que va a contener el nombre del signo ascendente
    divSignoAscendente.style.margin = '30px';
    divSignoAscendente.style.borderRadius = '30px';
    divSignoAscendente.style.borderWidth = '2px';
    divSignoAscendente.style.borderStyle = 'solid';
    divSignoAscendente.style.borderColor = '#8C6FF7';
    divSignoAscendente.style.backgroundColor = 'white';
    divSignoAscendente.style.width = '50%';

    // muestro en pantalla el resultado del ascendente y descripcion
    h3TituloAscendente.innerHTML = 'Tu Ascendente es:'
    parrafoSignoAscendente.innerHTML = objSigno.getAscendenteYDescripcion[0];
    parrafoDescripcionAscendente.innerHTML = objSigno.getAscendenteYDescripcion[1];

}

// extraigo el boton de calcular y agrego un evento de click
const botonCalcular = docu.querySelector('#botonCalcular');
botonCalcular.addEventListener('click', eventoCalcularAscendente);
