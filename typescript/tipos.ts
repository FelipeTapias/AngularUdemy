(function(){
    
    let mensaje: String = 'Hola';
    let numero: Number = 123;
    let boolean: Boolean = true;
    let hoy: Date = new Date();

    let cualquiercosa: String | Number | Date | Boolean;

    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = boolean;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };

    spiderman = {
        nombre: 'Felipe',
        edad: 18,
    };


})();
