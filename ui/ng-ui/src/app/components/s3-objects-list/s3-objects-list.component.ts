import { DatePipe, NgClass } from '@angular/common';
import { BucketObjectSummaryObjectModel } from './../../../../../lib/models/src/models/bucket-object-summary.model';
import { Component, effect, inject, input, OnChanges, signal } from '@angular/core';
import { LambdasService } from '../../services/lambdas.service';
import { BucketObjectContentModel } from 'models';

@Component({
  selector: 'app-s3-objects-list',
  imports: [DatePipe, NgClass],
  templateUrl: './s3-objects-list.component.html',
  styleUrl: './s3-objects-list.component.css'
})
export class S3ObjectsListComponent {

  objects = input.required<BucketObjectSummaryObjectModel[] | undefined>();

  lambdaService = inject(LambdasService);
  selectedKey = signal<string>('');

  constructor() {
    effect(() => {
      this.objects();
      this.selectedKey.set('');
    });
  }

  onSelect(object: BucketObjectSummaryObjectModel) {
    this.selectedKey.set(object.key);
    this.lambdaService.getBucketObject(object.key)
      .subscribe((response: BucketObjectContentModel) => {
        this.lambdaService.notifyBucketContentChanged({key: object.key, content: response});
      });
  }

  public isSelected(key: string): boolean {
    return this.selectedKey() === key;
  }

}
