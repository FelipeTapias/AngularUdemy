(function(){
    
    function activar( quien   : String,                 
                      momento?: String,
                      objeto  : String = 'batiseñal' ) {
            
        if( momento ){
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
        }else {
            console.log(`${ quien } activó la ${ objeto }`);
        }
            

    }

    activar('Gordon','tarde');

})();
