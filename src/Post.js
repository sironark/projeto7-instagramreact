import React, { useState } from "react";



export default function Post(post){
    let [salvarIcon, setSalvar] = useState("bookmark-outline");
    let [curtirIcon, setCurtir] = useState("heart-outline");
    let [cor, setCorLike] = useState({color: ''})
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
                setCorLike({color: 'red'})
            }else{
                setCurtir("heart-outline")
                setLikes(likes = likes - 1);
                setCorLike({color: ''})
            }
        }

        function curtirPelaFoto(){
            if(curtirIcon === "heart-outline"){
                setCurtir("heart")
                setLikes(likes = likes + 1);
                setCorLike({color: 'red'})
            }
        }
    
    return(
        
        <div class="post" data-test="post">
        <div class="topo">
          <div class="usuario"data-test="name">
            <img  src={post.srcUserLogo} alt={post.nameUser}/>
            {post.nameUser}
          </div>
          <div class="acoes" >
            <ion-icon name="ellipsis-horizontal" ></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img data-test="post-image" onClick={curtirPelaFoto} src={post.srcConteudo} alt="gato-telefone"/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name={curtirIcon} onClick={curtirPost} style= {cor} data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>


            <div class="salvar"  >                    
              <ion-icon name={salvarIcon} onClick={salvarPost} data-test="save-post"></ion-icon>
            </div>
          </div>



          <div class="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai"/>
            <div class="texto" data-test="likes-number">
              Curtido por <strong>respondeai</strong> e <strong>outras {likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
        
        
        
    );
}

