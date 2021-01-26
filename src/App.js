import React, {useContext} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Blog from './components/Blog'
import About from './components/About'
import Post from './components/Post'
import Error from './components/Error'
import {ContextoTema} from './contextos/contextoTema'



const App = () => {
  const {tema}= useContext(ContextoTema)
  console.log(tema.fuente)

  return (
    <BrowserRouter>
    <ContainerMain>
        <Header/>
      <MainStyled tema={tema}>      
        <Switch>
          
             <Route exact path="/">
                    <Inicio/>
              </Route>
        
            <Route exact path="/blog">
                     <Blog/>
            </Route>
        
            <Route exact path="/post/:id">
                     <Post/>
            </Route>
        
        
             {/*  Otra manera de armar la ruta, usamos la propiedad component para llamar al componente */}
        
              <Route exact path="/about" component={About}/>

              <Route component={Error}/>
          
          </Switch>  

      </MainStyled>


    </ContainerMain>    
    </BrowserRouter>
  )
}

const ContainerMain = styled.div `
      padding:40px; 
      width:90%; 
      max-width: 700px;
`;

const MainStyled = styled.div`
      //Ejecutamos funcion para acceder a tema, a traves de sus props
      font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
      text-align: ${props => props.tema ? props.tema.alineado  : 'right'};
      background-color: #fff; 
      padding: 40px; 
      border-radius: 10px; 
      box-shadow: 0px 0px 5px rgba(129,129,129,0.1);

`

export default App
