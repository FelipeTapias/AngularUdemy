(()=>{

                           // Uso de Let y Const
                            // const nombre = 'Ricardo Tapia';
                            // const edad = 23;
                          
                            // let PERSONAJE = {
                            //   nombre: nombre,
                            //   edad: edad
                            // };
                          



                        // Cree una interfaz que sirva para validar el siguiente objeto
                        // interface Heroe {
                        //   nombre: string;
                        //   artesMarciales: string[];
                        // }
                        // const i = Math.round(Math.random()*3);
                        // const batman: Heroe = {
                        //   nombre: 'Bruno Díaz',
                        //   artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
                        // }
                        // const nombreReal = (batman: Heroe) =>{
                        //   console.log(`Heroe: Nombre: ${batman.nombre}, forma de pelea: ${batman.artesMarciales[i]}`);
                        // }
                        // nombreReal(batman);


                      // Convertir esta funcion a una funcion de flecha
                      // function resultadoDoble( a, b ){
                      //   return (a + b) * 2
                      // }
                    
                      // const resultadoDoble = (a: number,b: number): number => (a+b)*2;
                    
                      // console.log(resultadoDoble(5,8));
                    
                      // // Función con parametros obligatorios, opcionales y por defecto
                      // // donde NOMBRE = obligatorio
                      // //       PODER  = opcional
                      // //       ARMA   = por defecto = 'arco'
                      // function getAvenger( nombre: string, poder?: string, arma: string = 'arco' ){
                      //   let mensaje;
                      //   if( poder ){
                      //     mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
                      //     console.log(mensaje);
                      //   }else{
                      //     mensaje = nombre + ' tiene un ' + arma;
                      //     console.log(mensaje);
                      //   }
                      // };
                      
                      // interface Avenger {
                      //   nombre: string;
                      //   poder?: string;
                      //   arma: string;
                      // }
                    
                      // const IronMan: Avenger = {
                      //     nombre: 'Tony Star',
                      //     arma: 'lazer'
                      // }
                    
                      // getAvenger(IronMan.nombre, IronMan.poder, IronMan.arma);


  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {
      base: number;
      altura: number;

      constructor(base,altura){
          this.base = base;
          this.altura = altura;
      }

      area = (): number => {
        return this.base*this.altura;  
      }
  }

  const f1 = new Rectangulo(9,8);
  const area = f1.area();
  console.log(`El area es: ${area}`);
})();