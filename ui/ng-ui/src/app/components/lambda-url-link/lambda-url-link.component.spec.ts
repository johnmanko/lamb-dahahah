import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaUrlLinkComponent } from './lambda-url-link.component';

describe('LambdaUrlLinkComponent', () => {
  let component: LambdaUrlLinkComponent;
  let fixture: ComponentFixture<LambdaUrlLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LambdaUrlLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LambdaUrlLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
