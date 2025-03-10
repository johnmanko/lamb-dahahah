import { DatePipe } from '@angular/common';
import { LogEventModel } from './../../../../../lib/models/src/models/logread-result.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logread-event-detail',
  imports: [DatePipe],
  templateUrl: './logread-event-detail.component.html',
  styleUrl: './logread-event-detail.component.css'
})
export class LogreadEventDetailComponent {

  event = input.required<LogEventModel>();

}
