
import { useState } from "react";


export function User(){
    let[nomeUser, setNome] = useState('catanacomics');
    let[imagemUsuario, setImagem] = useState('assets/img/catanacomics.svg')
   
    function promptUsuario(){
    
       const novoUser = prompt("Insira o seu nome de usuário")
       
       if(novoUser !== "" ){
       setNome(novoUser)
       } 

    }
    function promptImagem(){
    
        const novaImg = prompt("Insira o link da imagem")
        
        if(novaImg !==""){
        setImagem(novaImg)
        }

     }
     
    



    return(
        <div class="usuario">
        <img src={imagemUsuario} alt="imagem de perfil" onClick={promptImagem}/>
        <div class="texto">
          <span>
            <strong>{nomeUser}</strong>
            <ion-icon name="pencil" onClick={promptUsuario}></ion-icon>
          </span>
        </div>
      </div>
    );
}


