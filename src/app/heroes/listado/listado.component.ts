import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
    heroeBorrado: string = '';
    heroes: string [] = ['spiderman', 'hera', 'omahah', 'holajaja' ,' oksokso'];
    borrarHeroe() {
     console.log ('borrado');
     this.heroeBorrado = this.heroes.shift() || '';
    
    
   }

}
