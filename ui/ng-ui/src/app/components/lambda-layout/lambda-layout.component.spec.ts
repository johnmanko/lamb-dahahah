import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaLayoutComponent } from './lambda-layout.component';

describe('LambdaLayoutComponent', () => {
  let component: LambdaLayoutComponent;
  let fixture: ComponentFixture<LambdaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LambdaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LambdaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
