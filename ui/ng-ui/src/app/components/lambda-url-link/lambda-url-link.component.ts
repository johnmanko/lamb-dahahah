import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lambda-url-link',
  imports: [],
  templateUrl: './lambda-url-link.component.html',
  styleUrl: './lambda-url-link.component.css'
})
export class LambdaUrlLinkComponent {

  urls = input.required<string[]>();

}
