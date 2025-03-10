import { Component, OnInit, signal } from '@angular/core';
import { LambdaLayoutComponent } from '../../../components/lambda-layout/lambda-layout.component';
import { AbstractLambdaComponent } from '../../../lib/util/abstract-lambda.component';
import { BucketListStatsComponent } from "../../../components/bucket-list-stats/bucket-list-stats.component";
import { RequestIdComponent } from '../../../components/request-id/request-id.component';
import { S3ObjectsListComponent } from "../../../components/s3-objects-list/s3-objects-list.component";
import { S3ObjectContentComponent } from "../../../components/s3-object-content/s3-object-content.component";
import { BucketObjectSummaryModel } from 'models';

@Component({
  selector: 'app-bucket-browse',
  imports: [LambdaLayoutComponent, BucketListStatsComponent, RequestIdComponent, S3ObjectsListComponent, S3ObjectContentComponent],
  templateUrl: './bucket-browse.component.html',
  styleUrl: './bucket-browse.component.css'
})
export class BucketBrowseComponent extends AbstractLambdaComponent implements OnInit {

  bucketObjects = signal<BucketObjectSummaryModel | undefined>(undefined);

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.lambdaService.getBucketList()
      .subscribe((response) => {this.bucketObjects.set(response)});
  }


  override get urls(): string[] {
    return [
      this.lambdaService.getLambdaURL('bucket-list'),
      this.lambdaService.getLambdaURL('bucket-read')
    ];
  }

}
