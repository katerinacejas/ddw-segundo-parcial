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
    signo;
    ascendente;
    descripcionAscendente; //descripcion del ascendente del signo
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
        // hora format: MM-ss

        // extraigo los digitos de hora y minuto del string hora
        let hh = parseInt(hora.substr(0,2));
        let mm = parseInt(hora.substr(3,2));

        // calculo de la hora real dependiendo del año de nacimiento
        if((anio >= 1946) & (anio <= 1976)) {
            hh -= 1
        }
        if((anio > 1976) & (anio < 2000)) {
            hh -= 2
        }

        // array con el orden de los signos dependiendo de cual es el solar
        let ordenSignos = []

        // calculo del ascendente con los datos completos
        switch(this.signo) {
            case "Aries":
                ordenSignos = ["Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"]
                break;
            case "Tauro":
                ordenSignos = ["Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries"]
                break;
            case "Géminis":
                ordenSignos = ["Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro"]
                break;      
            case "Cáncer":
                ordenSignos = ["Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis"]
                break;   
            case "Leo":
                ordenSignos = ["Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer"]
                break;       
            case "Virgo":
                ordenSignos = ["Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo"]
                break;  
            case "Libra":
                ordenSignos = ["Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo"]
                break;                             
            case "Escorpio":
                ordenSignos = ["Escorpio","Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra"]
                break; 
            case "Sagitario":
                ordenSignos = ["Sagitario","Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio"]
                break;   
            case "Capricornio":
                ordenSignos = ["Capricornio","Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario"]
                break;
            case "Acuario":
                ordenSignos = ["Acuario","Piscis","Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio"]
                break;                                                                                                                                          
        }
        return cruceFranjaHoraria(ordenSignos);

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
    set setSigno(fecha) {
        this.signo = this.calcularSolar(fecha);
    }

    get getSigno() {
        return this.signo;
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