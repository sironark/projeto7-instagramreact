
import { Stories } from "./Stories";
import { Posts } from "./Posts";
import { SideBar } from "./SideBar";

export function Body(){
    return (
        <div>
<div class="corpo">
        <div class="esquerda">
          
        <Stories/>
        <Posts/>
          
        </div>
        <SideBar/>
        
      </div>


        </div>
    );
}




