<<<<<<< HEAD
import { Component,EventEmitter, Input, Output} from '@angular/core';
=======
import { Component,EventEmitter, Input, Output  } from '@angular/core';
>>>>>>> 796d56590985462595069f106f3cef4aa2c73a26

@Component({
  selector: 'app-temah',
  standalone: true,
  imports: [],
  templateUrl: './temah.component.html',
  styles: ``
})
export class TemahComponent {
<<<<<<< HEAD
  @Input() mensaje!: string;
  @Output() mensaje2 = new EventEmitter<string>();
  
  enviarmensaje(){
    this.mensaje2.emit('hola mundo desde hijo');
  }
}
=======

  @Input() mensaje!: string;

  @Output() mensaje2 = new EventEmitter<string>();

  enviarMensaje() {
    this.mensaje2.emit('Hola mundo desde hijo');      
}
}
>>>>>>> 796d56590985462595069f106f3cef4aa2c73a26
