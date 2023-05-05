import React, { useState } from "react";






export default function Post(post){
    let [salvarIcon, setSalvar] = useState("bookmark-outline");
    let [curtirIcon, setCurtir] = useState("heart-outline");
    let  [likes, setLikes] = useState(Number(post.curtida))


        function salvarPost(){
            if(salvarIcon === "bookmark-outline"){
                setSalvar("bookmark")
            }else{
                setSalvar("bookmark-outline")
            }
        }

        function curtirPost(){
            if(curtirIcon === "heart-outline"){
                setCurtir("heart")
                setLikes(likes = likes + 1);
            }else{
                setCurtir("heart-outline")
                setLikes(likes = likes - 1);
            }



        }
    
    return(
        
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={post.srcUserLogo} alt={post.nameUser}/>
            {post.nameUser}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={post.srcConteudo} alt="gato-telefone"/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name={curtirIcon} onClick={curtirPost}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>


            <div class="salvar"  >                    
              <ion-icon name={salvarIcon} onClick={salvarPost} ></ion-icon>
            </div>
          </div>



          <div class="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai"/>
            <div class="texto">
              Curtido por <strong>respondeai</strong> e <strong>outras {likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
        
        
        
    );
}

