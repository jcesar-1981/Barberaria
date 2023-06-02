import React, {useState} from "react";
import './estilo.css';


function HomePage(){

   const [temaEscuro, setTemaEscuro]=useState(false);

   const alterarEstilo =()=>{
        setTemaEscuro(!temaEscuro);
   }

    return(
    
            <div className={temaEscuro ? 'modo-dark' : 'modo-light'}>

                <div className="cabecalho">

                    <div className="logotipo">
                        <img src="assets/barbearia-logo.png"/>
                    </div>
                    
                    <button onClick = {alterarEstilo} className= {temaEscuro ? 'modo-dark' : 'modo-light'}>
                       <img className="icone" src={temaEscuro ? 'assets/sun.png' : 'assets/moon.png' }/> 
                       {temaEscuro?  'Light' : 'Dark' }    
                    </button>

                </div>

                <div className="banner">
                    
                </div>
                
                <div className="conteudo">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal.
                        Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo.
                        Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p>S. Kelly</p>
                </div>
                
            </div>
           
        
    );
}

export default HomePage;