const arraySugestoes = [
    {
        src: "assets/img/bad.vibes.memes.svg",
        alt:"bad.vibes.memes.svg",
        nome:"bad.vibes.memes",
        razao:"Segue você"
    },
    {
        src: "assets/img/chibirdart.svg",
        alt:"chibirdart",
        nome:"chibirdart",
        razao:"Segue você"
    },
    {
        src: "assets/img/razoesparaacreditar.svg",
        alt:"razoesparaacreditar",
        nome:"razoesparaacreditar",
        razao:"Novo no Instagram"
    },
    {
        src: "assets/img/adorable_animals.svg",
        alt:"adorable_animals",
        nome:"adorable_animals",
        razao:"Segue você"
    },
    {
        src: "assets/img/smallcutecats.svg",
        alt:"smallcutecats",
        nome:"smallcutecats",
        razao:"Segue você"
    }
]



export function Suggest(){
    return (
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
  

            {arraySugestoes.map(sugestao =>
                <div class="sugestao">
                <div class="usuario">
                  <img src={sugestao.src} alt={sugestao.alt}/>
                  <div class="texto">
                    <div class="nome">{sugestao.nome}</div>
                    <div class="razao">{sugestao.razao}</div>
                  </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
  
                
                )}

        </div>
            
    );
}

/*
<div class="sugestao">
              <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg"/>
                <div class="texto">
                  <div class="nome">bad.vibes.memes</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>
  
              <div class="seguir">Seguir</div>
            </div>
  
            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/chibirdart.svg" alt="chibirdart"/>
                <div class="texto">
                  <div class="nome">chibirdart</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>
  
              <div class="seguir">Seguir</div>
            </div>
  
            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
                <div class="texto">
                  <div class="nome">razoesparaacreditar</div>
                  <div class="razao">Novo no Instagram</div>
                </div>
              </div>
  
              <div class="seguir">Seguir</div>
            </div>
  
            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                <div class="texto">
                  <div class="nome">adorable_animals</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>
  
              <div class="seguir">Seguir</div>
            </div>
  
            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
                <div class="texto">
                  <div class="nome">smallcutecats</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>
  
              <div class="seguir">Seguir</div>
            </div>
          </div>
*/