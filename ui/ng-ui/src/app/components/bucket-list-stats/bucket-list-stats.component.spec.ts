import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListStatsComponent } from './bucket-list-stats.component';

describe('BucketListStatsComponent', () => {
  let component: BucketListStatsComponent;
  let fixture: ComponentFixture<BucketListStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketListStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketListStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
