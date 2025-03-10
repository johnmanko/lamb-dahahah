import { LogEventModel } from 'models';
import { Component, input } from '@angular/core';
import { LogreadEventDetailComponent } from '../logread-event-detail/logread-event-detail.component';

@Component({
  selector: 'app-logread-event-list',
  imports: [LogreadEventDetailComponent],
  templateUrl: './logread-event-list.component.html',
  styleUrl: './logread-event-list.component.css'
})
export class LogreadEventListComponent {

  events = input.required<LogEventModel[] | undefined>();
}
