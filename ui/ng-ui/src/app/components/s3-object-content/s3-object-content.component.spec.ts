import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ObjectContentComponent } from './s3-object-content.component';

describe('S3ObjectContentComponent', () => {
  let component: S3ObjectContentComponent;
  let fixture: ComponentFixture<S3ObjectContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3ObjectContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3ObjectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
