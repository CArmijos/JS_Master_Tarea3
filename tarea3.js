
var objeto = {

    lista: null,
  
    llamadaAPI: function() {

      fetch('https://escalab-6b3e3.firebaseio.com/javascript.json')
      .then ( response => response.json() )
      .then ( data=>{ if( this.lista === null ) {
                          this.lista = data   
                      }
                    
                  } )
      .catch(error => console.log('Se ha producido un error al  hacer peticion a API: ' + error.message))
    },

    verDatoLista: function(id){
        var registro = this.lista[id]; 
        return (registro === undefined ? 'No Existe en Lista' : registro);
    },

    vaciarLista: function(){
        this.lista.length = 0;
        return this.lista;
    },

    verPorPropiedad: function( id, props){
      var registro = this.lista[id]; 
  
      return ( registro[props] === undefined ? `La Props ${props} No Existe... ` : props + ' = ' +  registro[props] + ' Id de Busqueda = ' + id);
    },

    muestraData: function(){
      console.log( this.lista);
    },

    eliminaLista: new Promise(function(MiResolve, MiReject) {
      this.vaciarLista
      setTimeout(function(){ MiResolve("Ha vaciado Lista !!"); 
                             MiReject('Fallo vaciado de Lista'); }, 3000);
    })

}