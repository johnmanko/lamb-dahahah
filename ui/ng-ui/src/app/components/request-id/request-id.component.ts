import { Component, input } from '@angular/core';

@Component({
  selector: 'app-request-id',
  imports: [],
  templateUrl: './request-id.component.html',
  styleUrl: './request-id.component.css'
})
export class RequestIdComponent {

  id = input.required<string | undefined>();

}
