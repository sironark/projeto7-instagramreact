
const arrayStories = [
  {
    src:"assets/img/9gag.svg",
    alt: '9gag',
    usuario:'9gag'
  },
  {
    src:'assets/img/meowed.svg',
    alt: 'meowed',
    usuario:'meowed'
  },
  {
    src:'assets/img/barked.svg',
    alt: 'barked',
    usuario:'barked'
  },
  {
    src:'assets/img/nathanwpylestrangeplanet.svg',
    alt: 'nathanwpylestrangeplanet',
    usuario:'nathanwpylestrangeplanet'
  },
  {
    src:'assets/img/wawawicomics.svg',
    alt: 'wawawicomics',
    usuario:'wawawicomics'
  },
  {
    src:'assets/img/respondeai.svg',
    alt: 'respondeai',
    usuario:'respondeai'
  },
  {
    src:'assets/img/filomoderna.svg',
    alt: 'filomoderna',
    usuario:'filomoderna'
  },
  {
    src:'assets/img/memeriagourmet.svg',
    alt: 'memeriagourmet',
    usuario:'memeriagourmet'
  }

];




export function Stories(){
    return(
        <div>
            <div class="stories">
           
            {arrayStories.map(story =>
              <div class="story">
              <div class="imagem">
                <img src={story.src} alt={story.usuario}/>
              </div>
              <div class="usuario">
                {story.usuario} 
              </div>
            </div>
              )}
  
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>


        </div>
    );
}



/*  <div class="story">
              <div class="imagem">
                <img src="assets/img/9gag.svg" alt="9gag"/>
              </div>
              <div class="usuario">
                9gag
              </div>
            </div>
         
            <div class="story">
              <div class="imagem">
                <img src="assets/img/meowed.svg" alt="meowed"/>
              </div>
              <div class="usuario">
                meowed
              </div>
            </div>
            <div class="story">
              <div class="imagem">
                <img src="assets/img/barked.svg" alt="barked"/>
              </div>
              <div class="usuario">
                barked
              </div>
            </div>
            <div class="story">
              <div class="imagem">
                <img src="assets/img/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet"/>
              </div>
              <div class="usuario">
                nathanwpylestrangeplanet
              </div>
            </div>  
            <div class="story">
              <div class="imagem">
                <img src="assets/img/wawawicomics.svg" alt="wawawicomics"/>
              </div>
              <div class="usuario">
                wawawicomics
              </div>
            </div>
            <div class="story">
              <div class="imagem">
                <img src="assets/img/respondeai.svg" alt="respondeai"/>
              </div>
              <div class="usuario">
                respondeai
              </div>
            </div>
            <div class="story">
        <div class="imagem">
          <img src="assets/img/filomoderna.svg" alt="filomoderna"/>
        </div>
        <div class="usuario">
          filomoderna
        </div>
            </div>
            <div class="story">
              <div class="imagem">
                <img src="assets/img/memeriagourmet.svg" alt="memeriagourmet"/>
              </div>
              <div class="usuario">
                memeriagourmet
              </div>
            </div>   */