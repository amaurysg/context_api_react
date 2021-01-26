import React, {useState} from 'react'

//Creemos el contexto = estado global
//Este estado queremos pasarlo a los elementos
const ContextoTema = React.createContext()

//componente proveedor 
//{children} elementos hijos, en este caso toda la APP
//Encerramos dentro de nuestro contexto y provider el hijo que sería toda la app
//asignamos un value para probar que se muestr en consola 


const ProveedorTema = ({children})=>{
  const [tema, setTema] = useState({
    alineado: 'center', 
    fuente: 20
  })
  
  const aumentarFuente = ()=> setTema({ ...tema,  fuente: tema.fuente + 2 })
  
  const disminuirFuente = ()=>{
    setTema(
      {
        ...tema, 
        fuente: tema.fuente - 2
      }
    )
  }
  const alinearIzquierda = ()=>{
    setTema(
      {
        ...tema, 
        alineado: 'left'
      }
    )
  }
  const alinearDerecha = ()=>{
    setTema(
      {
        ...tema, 
        alineado: 'right'
      }
    )
  }
  const alinearCentro = ()=>{
    setTema(
      {
        ...tema, 
        alineado: 'center'
      }
    )
  }

  return (
    <>
        <ContextoTema.Provider value={{tema,  aumentarFuente, 
                                              disminuirFuente,
                                              alinearIzquierda,
                                              alinearDerecha,
                                              alinearCentro}}>
          {children}          
        </ContextoTema.Provider>  
    </>
  )
}

//exportamos las dos constantes que importamos en index.js
//En index.js encerramos <App/> dentro de <ProveedorTema>
export {ContextoTema, ProveedorTema}