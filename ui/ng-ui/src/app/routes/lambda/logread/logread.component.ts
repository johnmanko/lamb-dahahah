import { Component, OnInit, signal } from '@angular/core';
import { LambdaLayoutComponent } from '../../../components/lambda-layout/lambda-layout.component';
import { AbstractLambdaComponent } from '../../../lib/util/abstract-lambda.component';
import { LogreadResultModel } from 'models';
import { LogreadStatsComponent } from "../../../components/logread-stats/logread-stats.component";
import { RequestIdComponent } from "../../../components/request-id/request-id.component";
import { DatePipe } from '@angular/common';
import { LogreadEventListComponent } from '../../../components/logread-event-list/logread-event-list.component';

@Component({
  selector: 'app-logread',
  imports: [LambdaLayoutComponent, LogreadStatsComponent, RequestIdComponent, LogreadEventListComponent],
  templateUrl: './logread.component.html',
  styleUrl: './logread.component.css'
})
export class LogreadComponent extends AbstractLambdaComponent implements OnInit {

  logResults = signal<LogreadResultModel | undefined>(undefined);

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.lambdaService.getLogRead()
      .subscribe((results) => {this.logResults.set(results)});
  }

  override get urls(): string[] {
    return [this.lambdaService.getLambdaURL('logread')];
  }

}
