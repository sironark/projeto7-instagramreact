import { useState } from "react";
import Post from "./Post";




const objPost = [
  {
    srcUserLogo: "assets/img/meowed.svg",
    nameUser: "meowed",

    srcConteudo:"assets/img/gato-telefone.svg",
    curtida: "10"
  },
  {
    srcUserLogo: "assets/img/barked.svg",
    nameUser: "barked",

    srcConteudo:"assets/img/dog.svg",
    curtida: "95"
  },
  {
    srcUserLogo: "assets/img/meowed.svg",
    nameUser: "meowed",

    srcConteudo:"assets/img/gato-telefone.svg",
    curtida: "22"
  }
]





export function Posts(){


  return(

        <div class="posts">

            {objPost.map(Post)}

          </div>
    );
}
