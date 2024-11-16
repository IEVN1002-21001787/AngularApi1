import { Component } from '@angular/core';
import { TemahComponent } from "../temah/temah.component";

@Component({
  selector: 'app-temap',
  standalone: true,
  imports: [TemahComponent],
  templateUrl: './temap.component.html',
  styles: ``
})
export class TemapComponent {
  title = 'Hola desde papa';
<<<<<<< HEAD
  menasaje2:string=""
  recibirMensaje(mensaje:string){
    this.menasaje2=mensaje;     
=======
  mensaje2: string =""
  recibirMensaje(mensaje:string){
    this.mensaje2 = mensaje;
>>>>>>> 796d56590985462595069f106f3cef4aa2c73a26
  }
}
