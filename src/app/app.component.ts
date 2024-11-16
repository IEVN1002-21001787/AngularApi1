import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TemahComponent } from "./tem/temah/temah.component";
import { TemapComponent } from "./tem/temap/temap.component";
<<<<<<< HEAD
import { AddmenssageComponent } from "./tem/addmenssage/addmenssage.component";
import { NavegadorComponent } from "./navegador/navegador.component";
=======
>>>>>>> 796d56590985462595069f106f3cef4aa2c73a26

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,NavegadorComponent],
=======
  imports: [RouterOutlet,  TemapComponent],
>>>>>>> 796d56590985462595069f106f3cef4aa2c73a26
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApi1';
}
