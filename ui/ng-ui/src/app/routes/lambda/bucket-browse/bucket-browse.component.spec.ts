import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketBrowseComponent } from './bucket-browse.component';

describe('BucketBrowseComponent', () => {
  let component: BucketBrowseComponent;
  let fixture: ComponentFixture<BucketBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketBrowseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
