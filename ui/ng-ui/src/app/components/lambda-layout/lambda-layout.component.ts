import { Component, input } from '@angular/core';
import { LambdaUrlLinkComponent } from "../lambda-url-link/lambda-url-link.component";

@Component({
  selector: 'app-lambda-layout',
  templateUrl: './lambda-layout.component.html',
  styleUrl: './lambda-layout.component.css',
  imports: [LambdaUrlLinkComponent]
})
export class LambdaLayoutComponent {

  urls = input.required<string[]>();

}
