import { Component, inject, OnInit, signal } from '@angular/core';
import { HelloMessageModel } from 'models';
import { LambdasService } from '../../../services/lambdas.service';
import { LambdaLayoutComponent } from '../../../components/lambda-layout/lambda-layout.component';
import { AbstractLambdaComponent } from '../../../lib/util/abstract-lambda.component';
import { RequestIdComponent } from '../../../components/request-id/request-id.component';

@Component({
  selector: 'app-hello',
  imports: [LambdaLayoutComponent, RequestIdComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent extends AbstractLambdaComponent implements OnInit {

  helloMessage = signal<HelloMessageModel | undefined>(undefined);

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.lambdaService.getHello()
      .subscribe((message) => {this.helloMessage.set(message)});
  }

  override get urls(): string[] {
    return [this.lambdaService.getLambdaURL('hello')];
  }

}
