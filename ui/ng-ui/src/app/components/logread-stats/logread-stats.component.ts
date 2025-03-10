import { Component, input } from '@angular/core';
import { LogreadResultModel } from 'models';

@Component({
  selector: 'app-logread-stats',
  imports: [],
  templateUrl: './logread-stats.component.html',
  styleUrl: './logread-stats.component.css'
})
export class LogreadStatsComponent {

  stats = input.required<LogreadResultModel | undefined>();



}
