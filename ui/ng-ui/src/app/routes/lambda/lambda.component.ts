import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';


@Component({
  selector: 'app-lambda',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './lambda.component.html',
  styleUrl: './lambda.component.css',
  host: { 'style': 'display: contents;' },
})
export class LambdaComponent {

  constructor() {

  }

}
