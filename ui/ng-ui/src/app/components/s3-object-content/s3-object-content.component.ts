import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LambdasService } from '../../services/lambdas.service';

@Component({
  selector: 'app-s3-object-content',
  imports: [],
  templateUrl: './s3-object-content.component.html',
  styleUrl: './s3-object-content.component.css'
})
export class S3ObjectContentComponent implements OnInit {

  contentBody = signal<string[] | undefined>(undefined);
  contentType = signal<string | undefined>(undefined);
  objectKey = signal<string | undefined>(undefined);

  private lambdaService = inject(LambdasService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {

    this.lambdaService.subscribeToBucketContentChanged()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((content) => {
      this.objectKey.set(content.key);
      this.contentBody.set(content.content.content.split('\n'));
      this.contentType.set(content.content.contentType);
    });

  }

}
