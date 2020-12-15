( () => {
 
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    const extraer = ( { nombre, clave }: any ) => {

        // const { nombre, clave} = avenger;
        console.log( nombre );
        console.log( clave );
    }

    // extraer( avenger );

    const avengers: string[] = ['Thor','Iroman','Spiderman'];

    const [ loki, hombre, arana ] = avengers;

    // console.log( loki );
    // console.log( hombre );
    // console.log( arana );

    const extraerArr = ( [thor, ironman, spiderman]: string[] ) => {

           console.log(thor); 
           console.log(ironman); 
           console.log(spiderman); 


    }

    extraerArr(avengers);



    

})();
