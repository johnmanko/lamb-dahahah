import { BucketObjectSummaryModel } from './../../../../../lib/models/src/models/bucket-object-summary.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bucket-list-stats',
  imports: [],
  templateUrl: './bucket-list-stats.component.html',
  styleUrl: './bucket-list-stats.component.css'
})
export class BucketListStatsComponent {

  stats = input.required<BucketObjectSummaryModel | undefined>();

}
