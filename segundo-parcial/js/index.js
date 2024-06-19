'use strict';

// se crea la clase Persona 
class Persona {
    //variables
    nombre;
    fecha_nacimiento;
    hora_nacimiento;
    signoSolar;
    signoAscendente;

    //constructor
    constructor(nombre, fecha_nacimiento, hora_nacimiento) {
        this.nombre = nombre;
        this.fecha_nacimiento = fecha_nacimiento;
        this.hora_nacimiento = hora_nacimiento;
        
        // borrar:
        console.log(`persona nueva ${this.nombre} ${this.fecha_nacimiento} ${this.hora_nacimiento}`);    
    }

    //setter y getters
    set setSignoSolar(unSigno) {
        this.signoSolar = unSigno;
    }
    
    set setSignoAscendente(unSigno) {
        this.signoAscendente = unSigno;
    }

    get getSignoSolar() {
        return this.signoSolar;
    }
    
    get getSignoAscendente() {
        return this.signoAscendente;
    }
}


// se crea la clase Signo
class Signo {
    //variables
    signoSolar;
    ascendente;
    descripcionAscendente; //descripcion del ascendente del signoSolar
    anio;

    //metodos
    calcularSolar(fecha) {
        // fecha format: yyyy-mm-dd

        // extraigo los digitos de dia, mes y año del string fecha
        let dia = parseInt(fecha.substr(9,2));
        let mes = parseInt(fecha.substr(5,2));

        // guardo el año
        let anio = parseInt(fecha.substr(0,4));
        this.anio = anio;   

        // retorno el signo solar correspondiente dependiendo del mes y dia extraidos
        switch(mes) {
            case 1: //enero
                if(dia <= 21) {
                    return "Capricornio"
                }
                else {
                    return "Acuario"
                }
            case 2: //febrero
                if(dia <= 20) {
                    return "Acuario"
                }
                else {
                    return "Piscis"
                }
            case 3: //marzo
                if(dia >= 21) {
                    return "Aries"
                }
            case 4: //abril
                if(dia <= 20) {
                    return "Aries"
                }
                else {
                    return "Tauro"
                }
            case 5: //mayo
                if(dia <= 21) {
                    return "Tauro"
                }
                else {
                    return "Géminis"
                }
            case 6: //junio
                if(dia <= 22) {
                    return "Géminis"
                }
                else {
                    return "Cáncer"
                }
            case 7: //julio
                if(dia <= 22) {
                    return "Cáncer"
                }
                else {
                    return "Leo"
                }
            case 8: //agosto
                if(dia <= 22) {
                    return "Leo"
                }
                else {
                    return "Virgo"
                }
            case 9: //septiembre
                if(dia <= 22) {
                    return "Virgo"
                }
                else {
                    return "Libra"
                }
            case 10: //octubre
                if(dia <= 22) {
                    return "Libra"
                }
                else {
                    return "Escorpio"
                }
            case 11: //noviembre
                if(dia <= 22) {
                    return "Escorpio"
                }
                else {
                    return "Sagitario"
                }
            case 12: //diciembre
                if(dia <= 22) {
                    return "Sagitario"
                }
                else {
                    return "Capricornio"
                }
        }
    }

    calcularAscendente(hora) {
        // hora format: hh-mm en formato de 24hs: 00:00 -> 23:59

        // extraigo los digitos de hora y minuto del string hora
        let hh = parseInt(hora.substr(0,2));
        let mm = parseInt(hora.substr(3,2));

        // calculo de la hora real dependiendo del año de nacimiento
        /*
            Si el año de nacimiento fue estre 1946 y 1976 hay que restarle 1 hora,
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

        /*
            como previamente se calcula el signo solar, eso permite saber en cual de las filas del array multidimensional se debe evaluar el signo ascendente. 
            Ejemplo, si el signo solar es Virgo, debo ir a ordenSignos[5] y evaluar ese array
        */

        for(let fila = 0; fila <= 11; fila++) {
            if(this.signoSolar == ordenSignos[fila][0]) {
                if( // significa que nació justo en el minuto 00 de alguna de las horas del limite de las franjas,
                    ((hh==6)||(hh==8)||(hh==10)||(hh==12)||(hh==14)||(hh==16)||(hh==18)||(hh==20)||(hh==22)||(hh==24)||(hh==2)||(hh==4)) 
                    && (mm == 0)) { 
                        /*
                            en caso de cumplirse, hay que tomar el rango anterior.
                            ejemplo: si nacio a las 10:00, podría estar en el rango de las 08-10 o de las 10-12
                            se toma siempre el anterior, en ese caso el 08-10
                        */

                }
                else if ( // significa que nacio en una hora del limite de rango, pero que los minutos no son 0, entonces se puede tomar la hora dentro de ese rango
                    ((hh==6)||(hh==8)||(hh==10)||(hh==12)||(hh==14)||(hh==16)||(hh==18)||(hh==20)||(hh==22)||(hh==24)||(hh==2)||(hh==4)) 
                    && (mm != 0)) {

                }
                else { // significa que no nacio en una limite, el rango es tal cual

                }


                break;
            }
        }
        
    }

    asignarDescripcion(signoAscendente) {
        switch(signoAscendente) {
            case "Aries":
                return "Los ascendente en Aries suelen ser enérgicas, impulsivas y directas. Les gusta liderar y tomar decisiones rápidas."
            case "Tauro":
                return "Los ascendente en Tauro son pacientes, perseverantes y amantes del lujo y la comodidad. Les gusta disfrutar de la belleza y la buena comida."
            case "Géminis":
                return "Los ascendente en Géminis son comunicativos, curiosos y adaptables. Les gusta aprender cosas nuevas y socializar."
            case "Cáncer":
                return "Los ascendente en Cáncer son sensibles, protectores y cariñosos. Les gusta sentirse seguros y proteger a sus seres queridos."
            case "Leo":
                return "Los ascendente en Leo son creativos, generosos y carismáticos. Les gusta ser el centro de atención y recibir elogios."
            case "Virgo":
                return "Los ascendente en Virgo son detallistas, perfeccionistas y prácticos. Les gusta organizar y planificar todo al detalle."
            case "Libra":
                return "Los ascendente en Libra son amables, equilibradas y diplomáticas. Les gusta la armonía y la belleza en todas las áreas de su vida."
            case "Escorpio":
                return "Los ascendente en Escorpio son intensas, magnéticas y misteriosas. Les gusta investigar y descubrir la verdad oculta."
            case "Sagitario":
                return "Los ascendente en Sagitario son aventureros, optimistas y filosóficos. Les gusta viajar, aprender y expandir sus horizontes."
            case "Capricornio":
                return "Los ascendente en Capricornio son disciplinadas, responsables y ambiciosas. Les gusta trabajar duro para alcanzar sus metas."
            case "Acuario":
                return "Los ascendente en Acuario son originales, independientes y humanitarios. Les gusta luchar por causas sociales y ser diferentes."
            case "Piscis":
                return "Los ascendente en Piscis son intuitivos, compasivos y soñadores. Les gusta la espiritualidad y la conexión con lo divino."
        }
    }

    //setters y getters
    set setSignoSolar(fecha) {
        this.signoSolar = this.calcularSolar(fecha);
    }

    get getSignoSolar() {
        return this.signoSolar;
    }

    set setAscendente(hora) {
        this.ascendente = this.calcularAscendente(hora);
        this.descripcionAscendente = this.asignarDescripcion(this.ascendente);
    }
    
    get getAscendente() {
        return this.ascendente;
    }

    get getDescripcionAscendente() {
        return this.descripcionAscendente;
    }
}



/*
let field = document.querySelector('#date');

date.addEventListener('input', function () {

  // Get the date
  let date = field.valueAsDate;
  console.log(field.value);
  console.log(date);
});
*/