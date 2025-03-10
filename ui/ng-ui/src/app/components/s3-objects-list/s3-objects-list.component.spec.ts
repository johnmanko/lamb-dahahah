import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ObjectsListComponent } from './s3-objects-list.component';

describe('S3ObjectsListComponent', () => {
  let component: S3ObjectsListComponent;
  let fixture: ComponentFixture<S3ObjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3ObjectsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3ObjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
